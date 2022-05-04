import {Model} from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatureDTO } from './dto/creature.dto';
import {Creature,CreatureDocument} from './creature.schema';

@Injectable()
export class CreatureService {

    constructor(@InjectModel(Creature.name) private creatureModel : Model<CreatureDocument>){}

    private readonly creatures : CreatureDTO[] = [
        {name: "Alien",pictures: [{pictureDescription: "foto1", pictureURL: "heet"}], description: "heehee"},
        {name: "Kong",pictures: [{pictureDescription: "foto2", pictureURL: "he2et"}], description: "heehee2"},
        {name: "Gojira",pictures: [{pictureDescription: "foto3", pictureURL: "hee3t"}], description: "heehee3"},
    ]

    async create(newCreature: CreatureDTO): Promise<Creature>{
        const createdCreature = new this.creatureModel(newCreature);
        return createdCreature.save();
    }

    async findAll(): Promise<CreatureDTO[]>{        
        let curatedCreaturesList : CreatureDTO[] = [];
        const creaturesList = await this.creatureModel.find({})
        .exec()
        .then(creatures =>{
            creatures.forEach(c => curatedCreaturesList.push({
                name : c.name,
                pictures: c.pictures,
                description: c.description
            }));
        })
        return Promise.all(curatedCreaturesList);
    }

}
