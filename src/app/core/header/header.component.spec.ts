import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../core/models/user.model';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

const stubUser = new User(1, "John", "Smith", "login", "password");

const logout = jasmine.createSpy('logout');
const isAuthenticated = jasmine.createSpy('isAuthenticated').and.returnValue(true);
const getUserInfo = jasmine.createSpy('getUserInfo').and.returnValue(stubUser);
const authServiceStub: Partial<AuthService> = {
  isAuthenticated,
  getUserInfo,
  logout
};

const routerStub = {
  navigate: jasmine.createSpy('navigate')
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerStub},
        { provide: AuthService, useValue: authServiceStub }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
