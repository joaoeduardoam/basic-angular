import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class PersonCrudComponentFormComponent implements OnChanges{
  
  


  @Output() function = new EventEmitter<Person>();

  @Input() personSelectedForm:Person = new Person();


  ngOnChanges(changes: SimpleChanges): void {

    if (changes['personSelectedForm']) {
      
      const newPerson = changes['personSelectedForm'].currentValue;

      this.selectPerson(newPerson.id);

      console.log(`User profile updated: ${newPerson.name}, ${newPerson.city}`);
      // Update UI or perform other actions based on the new person data
    }
    
  }


  //Button Visibility
  btnSave:boolean = true;

  formPerson = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  remove() {
    this.btnSave = true;
    this.formPerson.reset();
  }
  update() {
    this.btnSave = true;
    this.formPerson.reset();
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
