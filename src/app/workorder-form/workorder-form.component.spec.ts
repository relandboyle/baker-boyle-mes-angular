import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderFormComponent } from './workorder-form.component';

describe('WorkorderFormComponent', () => {
  let component: WorkorderFormComponent;
  let fixture: ComponentFixture<WorkorderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkorderFormComponent]
    });
    fixture = TestBed.createComponent(WorkorderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
