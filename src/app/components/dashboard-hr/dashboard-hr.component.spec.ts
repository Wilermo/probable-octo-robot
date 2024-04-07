import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHRComponent } from './dashboard-hr.component';

describe('DashboardHRComponent', () => {
  let component: DashboardHRComponent;
  let fixture: ComponentFixture<DashboardHRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
