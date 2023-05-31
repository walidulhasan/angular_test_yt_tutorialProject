import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformComponent } from './angularform.component';

describe('AngularformComponent', () => {
  let component: AngularformComponent;
  let fixture: ComponentFixture<AngularformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularformComponent]
    });
    fixture = TestBed.createComponent(AngularformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
