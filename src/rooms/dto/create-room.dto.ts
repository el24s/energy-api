import { ApiProperty } from "@nestjs/swagger";
import { kMaxLength } from "buffer";

export class CreateRoomDto {
    @ApiProperty({
        description: 'Le code du local',
        example: '8076',
        maxLength: 4,
    })
    code!: string;

    @ApiProperty({
        description: "L'identifiant du bâtiment",
        example: '04',
        maxLength: 2
    })
    buildingId!: string;

    @ApiProperty({
        description: "L'étage du local",
        example: '2',
        maxLength: 2,
    })
    floor!: number;

    @ApiProperty({
        description: "Le type de local",
        example: 'laboratoire',
    })
    type!: string;

    @ApiProperty({
        description: "La capacité du nombre de personnes dans le local",
        example: '100',
    })
    capacity!: number;
}
