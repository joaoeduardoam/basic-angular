import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCrudComponentFormComponent } from './person-crud-component-form.component';

describe('PersonCrudComponentFormComponent', () => {
  let component: PersonCrudComponentFormComponent;
  let fixture: ComponentFixture<PersonCrudComponentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonCrudComponentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonCrudComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
