import { TestBed, inject } from '@angular/core/testing';

import { EducationService } from './education.service';

describe('EducationeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationService]
    });
  });

  it('should be created', inject([EducationService], (service: EducationService) => {
    expect(service).toBeTruthy();
  }));
});
