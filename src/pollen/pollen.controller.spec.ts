import { Test, TestingModule } from '@nestjs/testing';
import { PollenController } from './pollen.controller';
import { PollenService } from './pollen.service';

describe('PollenController', () => {
  let controller: PollenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollenController],
      providers: [PollenService],
    }).compile();

    controller = module.get<PollenController>(PollenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
