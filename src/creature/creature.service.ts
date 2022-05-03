import { Injectable } from '@nestjs/common';
import { Creature } from './creature.dto';

@Injectable()
export class CreatureService {

    private readonly creatures : Creature[] = [
        {name: "Alien",pictures: [{pictureDescription: "foto1", pictureURL: "heet"}], description: "heehee"},
        {name: "Kong",pictures: [{pictureDescription: "foto2", pictureURL: "he2et"}], description: "heehee2"},
        {name: "Gojira",pictures: [{pictureDescription: "foto3", pictureURL: "hee3t"}], description: "heehee3"},
    ]

    findAll(): Creature[]{
        // TODO: Crear conexion con mongo para buscar Creatures en la BD
        return this.creatures;
    }

}
