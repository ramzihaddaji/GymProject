import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCardioComponent } from './espace-cardio.component';

describe('EspaceCardioComponent', () => {
  let component: EspaceCardioComponent;
  let fixture: ComponentFixture<EspaceCardioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceCardioComponent]
    });
    fixture = TestBed.createComponent(EspaceCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
