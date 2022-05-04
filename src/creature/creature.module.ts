import { Module } from '@nestjs/common';
import { CreatureController } from './creature.controller';
import { CreatureService } from './creature.service';
import {Creature, CreatureSchema} from './creature.schema';
import { MongooseModule} from '@nestjs/mongoose';
const mongoose = require('mongoose')
const AutoIncrementFactory = require('mongoose-sequence');

const connection = mongoose.createConnection('mongodb://localhost:27017/kingofny');

const AutoIncrement = AutoIncrementFactory(connection);

@Module({
    imports: [MongooseModule.forFeatureAsync([
                {
                    name: Creature.name, 
                    useFactory: () => {
                        const schema =  CreatureSchema;
                        schema.plugin(AutoIncrement,{inc_field: 'creatureId'});
                        return schema;
                    }
                }
            ])],
    controllers: [CreatureController],
    providers: [CreatureService],
})
export class CreatureModule {
    constructor(private creatureService: CreatureService){}
}
