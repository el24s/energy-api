import { randomUUID } from "crypto";

export class Room {
    id: string; 
    code : string;
    buildingId: string;
    floor: number;
    type?: string;
    capacity?: number; //optionnal btw
    createdAt: Date;
    updatedAt: Date;

    constructor(code: string, buildingId: string, floor: number, type?: string, capacity?: number) {
        this.id = randomUUID();
        this.code = code;
        this.buildingId = buildingId;
        this.floor = floor;

        type ?? this.type;
        capacity ?? this.capacity;

        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
