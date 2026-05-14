import { useState } from "react"
import { mockClients } from "./mock"
import type { IClient, TClientStatus } from "./types";
import ClientsList from "./components/ClientsList";
import AddClientForm from "./components/AddClientForm";

const ClientsPage = () => {    
    const [clients, setClients] = useState<IClient[]>(mockClients);
    const [search, setSearch] = useState<string>('');
    const[filterStatus, setFilterStatus] = useState<TClientStatus | 'all'>('all');

    


    const filteredClients = clients.filter((c) => {
        const matchesSearch = 
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase());


        const matchesFilter = c.status === filterStatus || filterStatus === "all";


        return matchesSearch && matchesFilter;
    })

    


    const handleAddClient = (newClient: Omit<IClient, "id" | "createdAt">) => {

        const client = {
            id: crypto.randomUUID(),
            name: newClient.name,
            email: newClient.email,
            status: newClient.status,
            createdAt: new Date().toISOString()
        }
        setClients([...clients, client])
    }





    return( 
    <div>
        <h2>Clients</h2>

        <div>
            <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as TClientStatus | "all")}
            >
                

                <option value="all">ALL</option>
                <option value="lead">Lead</option>
                <option value="active">Active</option>
                <option value="archived">Archived</option>
            </select>
        

        </div>

        <ClientsList clients={filteredClients}/>


        <h3>Add New Client</h3>
        <AddClientForm handleAddClient={handleAddClient}></AddClientForm>
    </div>
    )
}

export default ClientsPage