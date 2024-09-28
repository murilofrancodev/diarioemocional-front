import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionBannerComponent } from './reflection-banner.component';

describe('ReflectionBannerComponent', () => {
  let component: ReflectionBannerComponent;
  let fixture: ComponentFixture<ReflectionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflectionBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
