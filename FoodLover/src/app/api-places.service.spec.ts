import { TestBed } from '@angular/core/testing';

import { ApiPlacesService } from './api-places.service';

describe('ApiPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPlacesService = TestBed.get(ApiPlacesService);
    expect(service).toBeTruthy();
  });
});
