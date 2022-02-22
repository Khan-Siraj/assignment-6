import { TestBed } from '@angular/core/testing';

import { ProductDetailsResolveGuard } from './product-details-resolve.guard';

describe('ProductDetailsResolveGuard', () => {
  let guard: ProductDetailsResolveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailsResolveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
