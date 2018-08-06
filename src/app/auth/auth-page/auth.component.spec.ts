import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { AuthComponent } from './auth.component';
import { Router } from '@angular/router';

const login = jasmine.createSpy('login');
const logout = jasmine.createSpy('logout');
const isAuthenticated = jasmine.createSpy('isAuthenticated');
const authServiceStub: Partial<AuthService> = {
  login,
  logout,
  isAuthenticated
};

const routerStub = {
  navigate: jasmine.createSpy('navigate')
};

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AuthComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: AuthService, useValue: authServiceStub }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});