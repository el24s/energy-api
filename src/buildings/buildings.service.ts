import { Injectable } from '@nestjs/common';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';


@Injectable()
export class BuildingsService {
    buildings : Building[];

    findAll() {
        return this.findAll();  
    }

    create(name: string, address: string, yearBuilt: number) {
        const build = new Building(name, address, yearBuilt)
        this.buildings.push(build);
    }
}

// variable qui augmente en haut stv avec l'id 
