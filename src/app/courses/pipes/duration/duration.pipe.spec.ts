import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DurationPipe } from './duration.pipe';
import { DecimalPipe } from '@angular/common';

@Component({
  template: `
    <div class="hoursAndMins">{{hoursAndMins | duration}}</div>
    <div class="hours">{{hours | duration}}</div>
    <div class="mins">{{mins | duration}}</div>`
})
class TestComponent {
  hoursAndMins = 140;
  hours = 60;
  mins = 40;
}

describe('DurationPipe', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testEl1: DebugElement;
  let testEl2: DebugElement;
  let testEl3: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, DurationPipe],
      providers: [DecimalPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testEl1 = fixture.debugElement.query(By.css('.hoursAndMins'));
    testEl2 = fixture.debugElement.query(By.css('.hours'));
    testEl3 = fixture.debugElement.query(By.css('.mins'));
  });

  it('shouls transform 140 into 2h 20min', () => {
    expect(testEl1.nativeElement.textContent).toBe('2h 20min');
  });

  it('should transform 60 into 1h 00min', () => {
    expect(testEl2.nativeElement.textContent).toBe('1h 00min');
  });

  it('should transfrom 40 into 40min', () => {
    expect(testEl3.nativeElement.textContent).toBe('40min');
  });
});