import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({timestamps: true })
export class Room extends Document {
    @Prop({ required: true, unique: true })
    code!: string;

    @Prop({ required: true })
    buildingId!: string;

    @Prop({ require: true })
    floor!: string;

    @Prop({ required: true })
    type!: string;

    @Prop({ required: true })
    capacity!: number;

    @Prop({ default: true })
    createdAt?: Date;

    @Prop({ default: true })
    modifiedAt?: Date;

}

export const RoomSchema = SchemaFactory.createForClass(Room);