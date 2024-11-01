import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMusculationComponent } from './espace-musculation.component';

describe('EspaceMusculationComponent', () => {
  let component: EspaceMusculationComponent;
  let fixture: ComponentFixture<EspaceMusculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceMusculationComponent]
    });
    fixture = TestBed.createComponent(EspaceMusculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
