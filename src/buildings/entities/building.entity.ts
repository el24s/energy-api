export class Building {
    id: number;
    name: string;
    address: string;
    yearBuilt: number;

    constructor(id: number, name: string, address: string, yearBuilt: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
    }
}