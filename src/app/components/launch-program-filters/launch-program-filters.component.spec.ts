import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramFiltersComponent } from './launch-program-filters.component';

describe('LaunchProgramFiltersComponent', () => {
  let component: LaunchProgramFiltersComponent;
  let fixture: ComponentFixture<LaunchProgramFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchProgramFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
