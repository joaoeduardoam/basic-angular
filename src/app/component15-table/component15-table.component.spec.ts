import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15TableComponent } from './component15-table.component';

describe('Component15TableComponent', () => {
  let component: Component15TableComponent;
  let fixture: ComponentFixture<Component15TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component15TableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Component15TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
