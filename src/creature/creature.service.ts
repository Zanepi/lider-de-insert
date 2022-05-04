import {Model} from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatureDTO } from './dto/creature.dto';
import {Creature,CreatureDocument} from './creature.schema';
import { doc } from 'prettier';

@Injectable()
export class CreatureService {

    constructor(@InjectModel(Creature.name) private creatureModel : Model<CreatureDocument>){}    

    async create(newCreature: CreatureDTO): Promise<Creature>{
        const createdCreature = new this.creatureModel(newCreature);
        return createdCreature.save();
    }

    async findAll(): Promise<CreatureDTO[]>{        
        let curatedCreaturesList : CreatureDTO[] = [];
        const creaturesList = await this.creatureModel.find({})
        .exec()
        .then(creatures =>{
            curatedCreaturesList = creatures.map(function(c){
                return this.fromModelToDTO(c);
            })
        })
        return Promise.all(curatedCreaturesList);
    }

    async findByCreatureId(creatureId: Number): Promise<CreatureDTO>{
        let creatureDTO : CreatureDTO = null;        

        const creature = await this.creatureModel.findOne({creatureId})
        .exec()
        .then(creature => creatureDTO = this.fromModelToDTO(creature)); 
        return creatureDTO;
    }

    async toggleCreatureAvailability(creatureId: Number): Promise<CreatureDTO>{
        let creatureDTO : CreatureDTO = null;

        const creature = await this.creatureModel.findOne({creatureId});
        creature.active = !creature.active;
        await creature.save();
        creatureDTO = this.fromModelToDTO(creature);
        return creatureDTO;

    }

    fromModelToDTO(c : Creature): CreatureDTO{
        let creatureDTO: CreatureDTO = {
            name : c.name,
            description : c.description,
            pictures: c.pictures,
            active: c.active
        }
        return creatureDTO;
    }

}
