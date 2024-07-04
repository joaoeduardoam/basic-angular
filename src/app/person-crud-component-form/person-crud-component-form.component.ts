import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../model/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-crud-component-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './person-crud-component-form.component.html',
  styleUrl: './person-crud-component-form.component.css'
})
export class PersonCrudComponentFormComponent {


  @Output() function = new EventEmitter<Person>();

  @Input() personSelectedForm:Person = new Person();


  //Button Visibility
  btnSave:boolean = true;

  formPerson = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  remove() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  
  save() {
    this.function.emit(this.formPerson.value as Person);
    this.formPerson.reset();
  }

  selectPerson(index:number) {
    this.formPerson.setValue({
      id : this.personSelectedForm.id,
      name : this.personSelectedForm.name,
      age : this.personSelectedForm.age,
      city : this.personSelectedForm.city      
    });

    this.btnSave = false;
  }


}
