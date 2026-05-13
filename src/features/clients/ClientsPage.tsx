import { useState } from "react"
import { mockClients } from "./mock"
import type { IClient, TClientStatus } from "./types";

const ClientsPage = () => {    
    const [clients, setClients] = useState<IClient[]>(mockClients);
    const [search, setSearch] = useState<string>('');
    const[filterStatus, setFilterStatus] = useState<TClientStatus | 'all'>('all');

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [status, setStatus] = useState<string>('')



    const filteredClients = clients.filter((c) => {
        const matchesSearch = 
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase());


        const matchesFilter = c.status === filterStatus || filterStatus === "all";


        return matchesSearch && matchesFilter;
    })

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
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

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Created at</th>
                </tr>
            </thead>
            <tbody>
                {filteredClients.map((client)=> (
                <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.status}</td>
                    <td>{client.createdAt}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <h3>Add New Client</h3>
        <form method="post">
            <div>
                <label>
                    Name: <br></br>
                    <input value={name} onChange={(e) => setName(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>
                    Email: <br></br>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
            </div>
            <div>
                <label>
                    Status: <br></br>
                    <select 
                    value="status" 
                    onChange={(e) => setStatus(e.target.value as TClientStatus)}>
                        <option value="lead">Lead</option>
                        <option value="lead">Active</option>
                        <option value="archived">Archived</option>
                    </select>
                </label>
            </div>
        </form>
    </div>
    )
}

export default ClientsPage