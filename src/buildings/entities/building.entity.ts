import { randomUUID } from "crypto";

export class Building {
    id: string;
    name: string;
    address: string;
    yearBuilt: number;
    createdAt: number;
    updatedAt: number;

    constructor(name: string, address: string, yearBuilt: number) {
        this.id = randomUUID();
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;

        this.createdAt = Date.now();
        this.updatedAt = Date.now();
    }
}