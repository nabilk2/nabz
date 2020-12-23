import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ShoesService } from './shoes.service';

describe('ShoesService', () => {
  let service: ShoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ShoesService
      ]
    });
    service = TestBed.inject(ShoesService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
