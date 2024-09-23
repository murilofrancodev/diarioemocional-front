import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinAuthComponent } from './pin-auth.component';

describe('PinAuthComponent', () => {
  let component: PinAuthComponent;
  let fixture: ComponentFixture<PinAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
