import { Types } from 'mongoose';
import { Pollen } from '../entities/pollen.entity';

export class CreatePollenDto extends Pollen { 
    _id?: Types.ObjectId; 
}