import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursEnfantComponent } from './cours-enfant.component';

describe('CoursEnfantComponent', () => {
  let component: CoursEnfantComponent;
  let fixture: ComponentFixture<CoursEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursEnfantComponent]
    });
    fixture = TestBed.createComponent(CoursEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
