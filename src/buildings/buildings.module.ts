import { Module } from '@nestjs/common';
import { BuildingsController } from './buildings.controller';
import { BuildingsService } from './buildings.service';
import { BuildingSchema, Building } from './schemas/building.schema';
// import { Building } from './entities/building.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Building.name, schema: BuildingSchema}])
  ],
  controllers: [BuildingsController],
  providers: [BuildingsService]
})
export class BuildingsModule {}
