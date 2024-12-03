import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMonthComponent } from './input-month.component';

describe('InputMonthComponent', () => {
  let component: InputMonthComponent;
  let fixture: ComponentFixture<InputMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
