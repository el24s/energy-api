import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({timestamps: true })
export class Building extends Document {
    @Prop({ required: true, unique: true })
    code!: string;

    @Prop({ require: true })
    name!: string;

    @Prop({ required: true })
    address!: string;

    @Prop({ required: true })
    yearBuilt!: number;

}

export const BuildingSchema = SchemaFactory.createForClass(Building);