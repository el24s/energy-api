import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches, maxLength } from "class-validator";
import { randomUUID } from "crypto";

export class CreateBuildingDto {
    // id: string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: 'Nom public et unique du bâtiment',
        example: 'Pavillon principal',
        maxLength: 100,
    })
    @Matches(/^(?:bld|BLD)-\d{3}/{
        message: "Les codes du bâtiment devrait suivre le format suivant: bld-xxx ou BLD-xxx"
    })
    name!: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({
        description: 'Année de construction',
        example: 1965,
        minimum: 1800,
        maximum: 2026,
    })
    yearBuilt!: number;

    @IsNotEmpty()
    @IsString() // potentielllemnet regex ici
    @ApiProperty({
        description: "L'adressedu bâtiment",
        example: '6000 rue Marie-Victorin',
        maxLength: 100,
    })
    address!: string;

    @IsString()
    @ApiProperty({
        description: "Le code du bâtiment",
        example: 'PC',
        minLength: 7,
        maxLength: 7
    })
    code!: string;

    

    constructor(code:string,name: string,address: string,yearBuilt: number) {
        // this.id = randomUUID();
        this.code = code;
        this.name = name;
        this.address = address;
        this.yearBuilt = yearBuilt;
    }
}