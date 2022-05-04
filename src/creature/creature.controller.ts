import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
    findOne(@Param() params): Promise<CreatureDTO>{
        return this.creatureServices.findByCreatureId(params.id);
    }

    @Post('create')
    async create(@Body() newCreatureDTO: CreatureDTO): Promise<CreatureDTO> {
        return this.creatureServices.create(newCreatureDTO);
    }

    @Patch('toggle/:id')
    async toggleCreatureAvailability(@Param() params): Promise<CreatureDTO>{
        return this.creatureServices.toggleCreatureAvailability(params.id);
    }

}
