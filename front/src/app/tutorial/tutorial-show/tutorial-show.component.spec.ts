import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialShowComponent } from './tutorial-show.component';

describe('TutorialShowComponent', () => {
  let component: TutorialShowComponent;
  let fixture: ComponentFixture<TutorialShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
