import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAudioComponent } from './note-audio.component';

describe('NoteAudioComponent', () => {
  let component: NoteAudioComponent;
  let fixture: ComponentFixture<NoteAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
