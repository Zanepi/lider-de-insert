import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatureController } from './creature/creature.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatureService } from './creature/creature.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/kingofny')],
  controllers: [AppController, CreatureController],
  providers: [AppService, CreatureService],
})
export class AppModule {}
