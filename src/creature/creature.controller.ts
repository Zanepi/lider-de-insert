import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatureDTO } from './dto/creature.dto';
import { CreatureService } from './creature.service';

@Controller('creature')
export class CreatureController {
    constructor(private creatureServices: CreatureService){}

    @Get('all')
    findAll(): Promise<CreatureDTO[]> {
        return this.creatureServices.findAll();
    }

    @Get(':id')
    findOne(@Param() params): string{
        return `Obtiene la criatura indicada por el campo id, en este caso, #${params.id}`;
    }

    @Post('create')
    async create(@Body() newCreatureDTO: CreatureDTO): Promise<CreatureDTO> {
        return this.creatureServices.create(newCreatureDTO);
    }

}
