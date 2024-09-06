import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollenService } from './pollen.service';
import { CreatePollenDto } from './dto/create-pollen.dto';
import { UpdatePollenDto } from './dto/update-pollen.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('pollen')
@ApiTags('pollen')
export class PollenController {
  constructor(private readonly pollenService: PollenService) {}

  @Post()
  @ApiOperation({ summary: 'Create pollen data' })
  @ApiResponse({ status: 201, description: 'The pollen data has been successfully created.'})
  create(@Body() createPollenDto: CreatePollenDto) {
    return this.pollenService.create(createPollenDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pollen data' })
  @ApiResponse({ status: 200, description: 'Return all pollen data.'})
  findAll() {
    return this.pollenService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pollen data by id' })
  @ApiResponse({ status: 200, description: 'Return the pollen data.'})
  findOne(@Param('id') id: string) {
    return this.pollenService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pollen data' })
  @ApiResponse({ status: 200, description: 'The pollen data has been successfully updated.'})
  update(@Param('id') id: string, @Body() updatePollenDto: UpdatePollenDto) {
    return this.pollenService.update(id, updatePollenDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pollen data' })
  @ApiResponse({ status: 200, description: 'The pollen data has been successfully deleted.'})
  remove(@Param('id') id: string) {
    return this.pollenService.remove(id);
  }
}