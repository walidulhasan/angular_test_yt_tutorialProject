import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingeventComponent } from './databindingevent.component';

describe('DatabindingeventComponent', () => {
  let component: DatabindingeventComponent;
  let fixture: ComponentFixture<DatabindingeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabindingeventComponent]
    });
    fixture = TestBed.createComponent(DatabindingeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
