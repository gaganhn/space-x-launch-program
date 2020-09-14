import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramCardComponent } from './launch-program-card.component';

describe('LaunchProgramCardComponent', () => {
  let component: LaunchProgramCardComponent;
  let fixture: ComponentFixture<LaunchProgramCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchProgramCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
