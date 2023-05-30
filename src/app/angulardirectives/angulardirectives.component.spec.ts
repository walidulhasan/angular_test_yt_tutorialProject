import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardirectivesComponent } from './angulardirectives.component';

describe('AngulardirectivesComponent', () => {
  let component: AngulardirectivesComponent;
  let fixture: ComponentFixture<AngulardirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngulardirectivesComponent]
    });
    fixture = TestBed.createComponent(AngulardirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
