import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';

describe('WishlishtService', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
