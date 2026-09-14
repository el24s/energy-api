import { Injectable, NotFoundException } from '@nestjs/common';
import { Building } from './entities/building.entity';
import { CreateBuildingDto } from './dto/create-building.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateBuildingDto } from './dto/update-building.dto';


@Injectable()
export class BuildingsService {

    // Injecter Model à l'aide de InjectModel dans le constructeur de BuildingService
    constructor (
        @InjectModel(Building.name) private readonly buildingModel: Model<Building>,
    ){}

    async findAll(): Promise<Building[]> {
        return this.buildingModel.find().exec();  
    }

    async findOne(id:string): Promise<Building> {
       const building = await this.buildingModel.findById(id).exec();

       if(!building) {
        throw new NotFoundException(`Le bâtiment avec l'ID ${id} n'existe pas`);
       }
       else {
        return building;
       }
    }
    async create(createBuildingDto : Partial<Building>) {
        return this.buildingModel.create(createBuildingDto);
    }

    async update(id: string, updateBuildingDto:UpdateBuildingDto) {
        const building: Promise<Building> = this.findById(id);

        Object.assign(building, updateBuildingDto);

        return this.buildingModel.findByIdAndUpdate(id, updateBuildingDto, {new: true}).exec();
    }

    async remove(id:string) {
        const deletedBuilding = await this.buildingModel.delete
        const index: number = this.findBuildingIndex(id);
    }


    async findById(id:strong) : Promise<Building> {
        const building = await this.buildingModel.findById(id);
        if (!building) {
            return;
        }
    }
}

// variable qui augmente en haut stv avec l'id 
