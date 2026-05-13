import type { IClient } from "./types";

export const mockClients: IClient[] = [
    {
        id: "1",
        name: "Anna Kowalska",
        email: "anna@email.com",
        status: "lead",
        createdAt: "2026-05-13T10:53:00.000Z"
    },
    {
        id: "2",
        name: "Piotr Nowak",
        email: "piotr@email.com",
        status: "active",
        createdAt: "2026-05-12T10:53:00.000Z"
    },
    {
        id: "3",
        name: "Marek Wiśniewski",
        email: "marek@email.com",
        status: "archived",
        createdAt: "2026-05-11T10:53:00.000Z"
    },
    {
        id: "4",
        name: "Julia Zielińska",
        email: "julia@email.com",
        status: "active",
        createdAt: "2026-05-10T10:53:00.000Z"
    },
];