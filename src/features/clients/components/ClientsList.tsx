import type { IClient } from "../types"
import ClientsListItem from "./ClientsListitem";

interface ClientsListProps{
    clients: IClient[];
}


const ClientsList = ({clients}: ClientsListProps)=>{
    if(clients.length === 0)
        return <p>No clients found</p> 
        
    return(
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
                {clients.map((c, index)=> (
                    <ClientsListItem client ={c} key ={c.id} ></ClientsListItem>
                ))}
            </tbody>
        </table>
            )
            
    
}

export default ClientsList

