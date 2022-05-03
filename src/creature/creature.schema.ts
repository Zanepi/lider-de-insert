import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from 'mongoose';

export type CreatureDocument =  Creature & Document;

type PictureDefinition = 
    {   pictureDescription: string,
        pictureURL: string
    };

@Schema()
export class Creature {
    @Prop()
    name: string;

    @Prop()
    pictures: PictureDefinition[];

    @Prop()
    description: string;    


}

export const CreatureSchema = SchemaFactory.createForClass(Creature);