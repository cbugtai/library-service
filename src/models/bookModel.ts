export enum BookStatus {
    AVAILABLE = "Available",
    BORROWED = "Borrowed",
    RESERVED = "Reserved",
}

export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    isBorrowed: boolean;
    borrowerId?: string;
    dueDate?: string;
    status: BookStatus;
    reservedBy?: string; // userId when status is RESERVED
    reservedDate?: string; // ISO string when reserved
}
