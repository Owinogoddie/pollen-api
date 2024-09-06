import { Test, TestingModule } from '@nestjs/testing';
import { PollenService } from './pollen.service';

describe('PollenService', () => {
  let service: PollenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollenService],
    }).compile();

    service = module.get<PollenService>(PollenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
