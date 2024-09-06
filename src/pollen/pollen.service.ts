import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePollenDto } from './dto/create-pollen.dto';
import { UpdatePollenDto } from './dto/update-pollen.dto';
import { Pollen, PollenDocument } from './entities/pollen.entity';

@Injectable()
export class PollenService {
  constructor(@InjectModel(Pollen.name) private pollenModel: Model<PollenDocument>) {}

  async create(createPollenDto: CreatePollenDto) {
    try {
      const createdPollen = new this.pollenModel(createPollenDto);
      return await createdPollen.save();
    } catch (error) {
      throw new InternalServerErrorException('Failed to create pollen entry');
    }
  }

  findAll() {
    return this.pollenModel.find().exec();
  }

  findOne(id: string) {
    return this.pollenModel.findById(id).exec();
  }

  update(id: string, updatePollenDto: UpdatePollenDto) {
    return this.pollenModel.findByIdAndUpdate(id, updatePollenDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.pollenModel.findOneAndDelete({id}).exec();
  }
}