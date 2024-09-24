import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionAudioComponent } from './emotion-audio.component';

describe('EmotionAudioComponent', () => {
  let component: EmotionAudioComponent;
  let fixture: ComponentFixture<EmotionAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
