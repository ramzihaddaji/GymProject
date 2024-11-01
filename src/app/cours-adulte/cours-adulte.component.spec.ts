import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursAdulteComponent } from './cours-adulte.component';

describe('CoursAdulteComponent', () => {
  let component: CoursAdulteComponent;
  let fixture: ComponentFixture<CoursAdulteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursAdulteComponent]
    });
    fixture = TestBed.createComponent(CoursAdulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
