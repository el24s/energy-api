import { randomUUID } from "crypto";

export class Building {
    id: string;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(name: string, address: string, yearBuilt: number) {
        this.id = randomUUID();
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
    }
}