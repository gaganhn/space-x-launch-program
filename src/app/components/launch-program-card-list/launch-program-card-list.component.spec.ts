import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramCardListComponent } from './launch-program-card-list.component';

describe('LaunchProgramCardListComponent', () => {
  let component: LaunchProgramCardListComponent;
  let fixture: ComponentFixture<LaunchProgramCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchProgramCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
