import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DargdropComponent } from './dargdrop.component';

describe('DargdropComponent', () => {
  let component: DargdropComponent;
  let fixture: ComponentFixture<DargdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DargdropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DargdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
