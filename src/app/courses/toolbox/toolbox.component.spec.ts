import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

const onSearchPressedSpy = jasmine.createSpy('onSearchPressedSpy');

@Component({
  template: '<app-toolbox (searchHandler)="onSearch(query)"></app-toolbox>'
})
class TestHostComponent {
  public onSearch() {
    onSearchPressedSpy();
  }
}

describe('ToolboxComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TestHostComponent, ToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
    onSearchPressedSpy.calls.reset();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should execute searchHandler() when search button is pressed', async(() => {
    const searchButton = fixture.debugElement.query(By.css('button[type=submit]'));
    searchButton.triggerEventHandler('click', null);

    expect(onSearchPressedSpy).toHaveBeenCalledTimes(1);
  }));

});
