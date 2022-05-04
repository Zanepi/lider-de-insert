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
        await this.creatureModel.find({})
        .exec()
        .then(creatures =>{
            curatedCreaturesList = creatures.map(function(c){
                return fromModelToDTO(c);
            })
        })
        return curatedCreaturesList;
    }

    async findByCreatureId(creatureId: Number): Promise<CreatureDTO>{
        let creatureDTO : CreatureDTO = null;        
        await this.creatureModel.findOne({creatureId})
        .exec()
        .then(creature => creatureDTO = fromModelToDTO(creature)); 
        return creatureDTO;
    }

    async toggleCreatureAvailability(creatureId: Number): Promise<CreatureDTO>{
        const creature = await this.creatureModel.findOne({creatureId});
        creature.active = !creature.active;
        await creature.save();
        return fromModelToDTO(creature);  
    }    

}
function fromModelToDTO(c: Creature ): CreatureDTO {
    let creatureDTO: CreatureDTO = {
        name : c.name,
        description : c.description,
        pictures: c.pictures,
        active: c.active
    }
    return creatureDTO;
}

