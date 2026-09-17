import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Building } from "./entities/buildings.entity";
import { Model } from "mongoose";
import { CreateBuildingDto } from "./dto/create-building.dto";


@Injectable()
export class BuildingsRepository {
    constructor (
        @InjectModel(Building.name) private readonly buildingModel:Model<Building>
    ) {}


    async findAll(): Promise<Building[]> {
        return this.buildingModel.find().exec();
    }

    async findById(id: string): Promise<Building | null> {
        return this.buildingModel.findById(id).exec();
    }
    async create(data: CreateBuildingDto): Promise<Building> {
        return this.buildingModel.create(data);
    }
    async update(id: string, data: CreateBuildingDto): Promise<Building | null> {
        return this.buildingModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async remove(id: string): Promise<Building | null> {
        return this.buildingModel.findByIdAndDelete(id).exec();
    }
}