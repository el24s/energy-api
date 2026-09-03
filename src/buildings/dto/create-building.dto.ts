import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class CreateBuildingDto {
    id:string

    @ApiProperty({
        description: 'Nom public et unique du bâtiment',
        example: 'Pavillon principal',
        maxLength: 100,
    })
    name!: string;

    @ApiProperty({
        description: 'Année de construction',
        example: 1965,
        minimum: 1800,
        maximum: 2026,
    })
    yearBuilt!: number;

    @ApiProperty({
        description: "L'adressedu bâtiment",
        example: '6000 rue Marie-Victorin',
        maxLength: 100,
    })
    address!: string;

    @ApiProperty({
        description: "Le code du bâtiment",
        example: 'PC',
        maxLength: 3,
    })
    code!: string;

    

    constructor(code:string,name: string,address: string,yearBuilt: number) {
        this.id = randomUUID();
        this.code = code;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
    }
}