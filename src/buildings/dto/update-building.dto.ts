import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingDto } from './create-building.dto';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { Matches } from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBuildingDto extends PartialType(CreateBuildingDto){} {
    
    @ApiProperty({
        description:"Le code d'un bâtiment",
        example:'BLD-001',
    })
    @Matches(/^(?:bld|BLD)-\d{3}/,{
        message: "Les codes du bâtiment devrait suivre le format suivant: bld-xxx ou BLD-xxx"
    })
    code!: string;

    @ApiProperty({
        description: "Nom du bâtiment",
        example: "Tour Eiffel",
    })
    @IsString()
    @MaxLength(100)
    name!: string;

    @ApiProperty({
        description: 'Année de construction du bâtiment',
        example: 1889
    })
    @IsOptional()
    @IsInt()
    @Min(1500)
    @Max(new Date().getFullYear())
    yearBuilt!: number

    @ApiProperty({
        description: "L'adresse complète du bâtiment",
        example: "Champ de Mars, 5? Avenue",
    })
    @IsString()
    @IsOptional()
    address!: string
}
