import { Controller, Get, Param, Post } from '@nestjs/common';
import { Creature } from './creature.dto';
import { CreatureService } from './creature.service';


@Controller('creature')
export class CreatureController {
    constructor(private creatureServices: CreatureService){}

    @Get('all')
    findAll(): Creature[] {
        return this.creatureServices.findAll();
    }

    @Get(':id')
    findOne(@Param() params): string{
        return `Obtiene la criatura indicada por el campo id, en este caso, #${params.id}`;
    }

    @Post()
    create(): string {
        return 'Ingresa una nueva criatura a la lista';
    }

}
