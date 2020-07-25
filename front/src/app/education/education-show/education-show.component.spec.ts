import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationShowComponent } from './education-show.component';

describe('EducationShowComponent', () => {
  let component: EducationShowComponent;
  let fixture: ComponentFixture<EducationShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
