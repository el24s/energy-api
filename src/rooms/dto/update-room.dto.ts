import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
   @ApiProperty({
      description:"L'étage du local",
      example: 1,
      minimum: -5,
      maximum: 100,
      required:false,
   })
   floor?: number;  
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
