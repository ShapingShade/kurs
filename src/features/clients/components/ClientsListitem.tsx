import type { IClient } from "../types";

interface ClientsListItemProps {
    client: IClient;
}

const ClientsListItem = ({ client }: ClientsListItemProps) => (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.status}</td>
        <td>{client.createdAt}</td>
    </tr>
);

export default ClientsListItem;