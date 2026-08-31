import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {
    constructor (
        private readonly service : BuildingsService,
    ){}

    @Get()
    findAll() {
        return this.service.findAll();
    } 

    @Post()
    create(@Body() dto : CreateBuildingDto) {
        return this.service.create(dto.name, dto.address, dto.yearBuilt);
    }
}
