import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRRHHComponent } from './login-rrhh.component';

describe('LoginRRHHComponent', () => {
  let component: LoginRRHHComponent;
  let fixture: ComponentFixture<LoginRRHHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRRHHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRRHHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
