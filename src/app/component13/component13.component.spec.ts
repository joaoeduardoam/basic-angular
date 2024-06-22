import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13Component } from './component13.component';

describe('Component13Component', () => {
  let component: Component13Component;
  let fixture: ComponentFixture<Component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
