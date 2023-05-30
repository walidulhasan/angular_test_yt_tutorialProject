import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServicesComponent } from './angular-services.component';

describe('AngularServicesComponent', () => {
  let component: AngularServicesComponent;
  let fixture: ComponentFixture<AngularServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularServicesComponent]
    });
    fixture = TestBed.createComponent(AngularServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
