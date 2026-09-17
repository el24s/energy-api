import { Prop } from "@nestjs/mongoose";
import { randomUUID } from "crypto";

export class Building {
    @Prop({required: true})
    id: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    address: string;

    @Prop({required: true})
    yearBuilt: number;

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    updatedAt: Date;

    constructor(name: string, address: string, yearBuilt: number) {
        this.id = randomUUID();
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;

        this.createdAt = Date.now();
        this.updatedAt = Date.now();
    }
}