import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCrudComponentTableComponent } from './person-crud-component-table.component';

describe('PersonCrudComponentTableComponent', () => {
  let component: PersonCrudComponentTableComponent;
  let fixture: ComponentFixture<PersonCrudComponentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonCrudComponentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonCrudComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
