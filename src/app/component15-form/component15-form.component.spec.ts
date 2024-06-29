import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15FormComponent } from './component15-form.component';

describe('Component15FormComponent', () => {
  let component: Component15FormComponent;
  let fixture: ComponentFixture<Component15FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15FormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
