import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionSelectorComponent } from './emotion-selector.component';

describe('EmotionSelectorComponent', () => {
  let component: EmotionSelectorComponent;
  let fixture: ComponentFixture<EmotionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
