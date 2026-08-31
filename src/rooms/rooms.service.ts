import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private readonly rooms: Room[] = [];
  create(createRoomDto: CreateRoomDto) {
    const {code, buildingId,floor,type,capacity} = createRoomDto;
    const newRoom: Room = new Room(code, buildingId,floor,type,capacity)
    
    Object.assign(newRoom, createRoomDto);

    this.rooms.push(newRoom);
    return newRoom;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: string) {
    const room : Room | undefined = this.rooms.find((room : Room) => room.id === id);

    if (!room) {
      throw new NotFoundException(`Le local avec l'id ${id} n'existe pas.`)
    }
    return room;
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    const room : Room  = this.findOne(id)

    Object.assign(room, updateRoomDto);
    room.updatedAt = new Date();

    return room;
  }

  // TODO
  remove(id: string) {
    const index:number = this.rooms.findIndex((room: Room) => room.id === id);
    if (index === -1) {
      throw new NotFoundException(`Le room avec l'id ${id} n'existe pas`);
    }
    return `This action removes a #${id} room`;
  }
}
