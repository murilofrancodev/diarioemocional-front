import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReflectionComponent } from './self-reflection.component';

describe('SelfReflectionComponent', () => {
  let component: SelfReflectionComponent;
  let fixture: ComponentFixture<SelfReflectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfReflectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
