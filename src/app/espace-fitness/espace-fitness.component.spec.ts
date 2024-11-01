import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceFitnessComponent } from './espace-fitness.component';

describe('EspaceFitnessComponent', () => {
  let component: EspaceFitnessComponent;
  let fixture: ComponentFixture<EspaceFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceFitnessComponent]
    });
    fixture = TestBed.createComponent(EspaceFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
