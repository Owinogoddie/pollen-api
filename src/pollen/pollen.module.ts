import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PollenService } from './pollen.service';
import { PollenController } from './pollen.controller';
import { Pollen, PollenSchema } from './entities/pollen.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pollen.name, schema: PollenSchema }])],
  controllers: [PollenController],
  providers: [PollenService],
})
export class PollenModule {}