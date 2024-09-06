import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PollenDocument = Pollen & Document;

@Schema({ timestamps: true })
export class Pollen {
  @ApiProperty({
    type: String,
    example: 'device_12345',
    description: 'Unique identifier for the device',
  })
  @Prop({ required: true })
  device_id: string;

  @ApiProperty({
    type: Object,
    example: { latitude: '12.3456', longitude: '98.7654' },
    description: 'GPS location of the device',
  })
  @Prop({
    required: true,
    type: {
      latitude: String,
      longitude: String,
    },
  })
  location: {
    latitude: string;
    longitude: string;
  };

  @ApiProperty({
    type: Object,
    example: { satellites: 5, time: '2024-09-05T10:00:00Z' },
    description: 'GPS satellite information and time of data collection',
  })
  @Prop({
    required: true,
    type: {
      satellites: Number,
      time: String,
    },
  })
  gps_info: {
    satellites: number;
    time: string;
  };

  @ApiProperty({
    type: Object,
    example: {
      Temperature: '24.5',
      Humidity: '60',
      noiseLevel: '1200',
    },
    description: 'Sensor data including temperature, humidity, and noise level',
  })
  @Prop({
    required: true,
    type: {
      Temperature: String,
      Humidity: String,
      noiseLevel: String,
    },
  })
  sensorData: {
    Temperature: string;
    Humidity: string;
    noiseLevel: string;
  };
}

export const PollenSchema = SchemaFactory.createForClass(Pollen);