import { Module } from '@nestjs/common';
import { CreatureController } from './creature.controller';
import { CreatureService } from './creature.service';
import {Creature, CreatureSchema} from './creature.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: Creature.name, schema: CreatureSchema}])],
    controllers: [CreatureController],
    providers: [CreatureService],
})
export class CreatureModule {
    constructor(private creatureService: CreatureService){}
}
