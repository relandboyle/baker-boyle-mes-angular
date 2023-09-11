import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderFormComponent } from './salesorder-form.component';

describe('SalesorderFormComponent', () => {
  let component: SalesorderFormComponent;
  let fixture: ComponentFixture<SalesorderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesorderFormComponent]
    });
    fixture = TestBed.createComponent(SalesorderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
