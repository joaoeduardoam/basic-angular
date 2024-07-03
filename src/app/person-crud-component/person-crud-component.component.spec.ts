import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCrudComponentComponent } from './person-crud-component.component';

describe('PersonCrudComponentComponent', () => {
  let component: PersonCrudComponentComponent;
  let fixture: ComponentFixture<PersonCrudComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonCrudComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonCrudComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
