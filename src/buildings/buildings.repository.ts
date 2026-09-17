import { Injectable } from "@nestjs/common";
import { BuildingsService } from "./buildings.service";





@Injectable()
export class BuildingsRepository {
    constructor {
        BuildingsService buildingService
    } {}


    async findAll(): Promise<Building> {
        
    }
}