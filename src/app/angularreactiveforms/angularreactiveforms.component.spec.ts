import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularreactiveformsComponent } from './angularreactiveforms.component';

describe('AngularreactiveformsComponent', () => {
  let component: AngularreactiveformsComponent;
  let fixture: ComponentFixture<AngularreactiveformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularreactiveformsComponent]
    });
    fixture = TestBed.createComponent(AngularreactiveformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
