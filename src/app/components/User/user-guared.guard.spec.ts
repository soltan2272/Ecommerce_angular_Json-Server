import { TestBed } from '@angular/core/testing';

import { UserGuaredGuard } from './user-guared.guard';

describe('UserGuaredGuard', () => {
  let guard: UserGuaredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserGuaredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
