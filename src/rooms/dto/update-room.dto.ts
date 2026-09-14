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
}
