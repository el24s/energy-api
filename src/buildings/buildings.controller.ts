import { Controller, Get, Param } from '@nestjs/common';
import { BuildingsService } from './buildings.service';

@Controller('buildings')
export class BuildingsController {
    constructor (
        private readonly service : BuildingsService,
    ){}

    @Get('/:id')
    findById(@Param('id') id : string) {
        return this.service.findOne(id);
    } 
}
