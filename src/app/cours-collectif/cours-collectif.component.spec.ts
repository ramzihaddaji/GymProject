import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCollectifComponent } from './cours-collectif.component';

describe('CoursCollectifComponent', () => {
  let component: CoursCollectifComponent;
  let fixture: ComponentFixture<CoursCollectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursCollectifComponent]
    });
    fixture = TestBed.createComponent(CoursCollectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
