import { randomUUID } from "crypto";

export class CreateBuildingDto {
    id:string
    code:string;
    name: string;
    address: string;
    yearBuilt: number;

    constructor(code:string,name: string,address: string,yearBuilt: number) {
        this.id = randomUUID();
        this.code = code;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
    }
}