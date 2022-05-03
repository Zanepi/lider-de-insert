import { Test, TestingModule } from '@nestjs/testing';
import { CreatureController } from './creature.controller';

describe('CreatureController', () => {
  let controller: CreatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatureController],
    }).compile();

    controller = module.get<CreatureController>(CreatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
