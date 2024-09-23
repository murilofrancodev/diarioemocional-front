import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAuthComponent } from './logo-auth.component';

describe('LogoAuthComponent', () => {
  let component: LogoAuthComponent;
    let fixture: ComponentFixture<LogoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
