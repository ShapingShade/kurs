export type TClientStatus = string;

export interface IClient {
    id: string;
    name: string;
    email: string;
    status: string;
    createdAt: string;
}