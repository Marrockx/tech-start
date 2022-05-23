import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuccessPageComponent } from './form-success-page.component';

describe('FormSuccessPageComponent', () => {
  let component: FormSuccessPageComponent;
  let fixture: ComponentFixture<FormSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
