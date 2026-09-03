import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Building } from './entities/building.entity';

@ApiTags('Buildings')
@Controller({path:'buildings', version: '1'})
export class BuildingsController {
    
    constructor (
        private readonly service : BuildingsService,
    ){}
    
    @ApiOperation({
    summary: 'Créer un bâtiment',
    description: 'Ajoute un bâtiment à la collection courante.',
    })

    @ApiCreatedResponse ({
        description: 'Bâtiment créé.',
        type: Building,
        headers: {
            Location: {
                description: 'URI de la nouvelle ressource',
                schema: { type: 'string'},
            },
        },
    })

    
    @Get()
    findAll() {
        return this.service.findAll();
    } 

    @Post()
    @ApiOperation({

    })
    create(@Body() dto : CreateBuildingDto) {
        return this.service.create(dto.name, dto.address, dto.yearBuilt);
    }
}
