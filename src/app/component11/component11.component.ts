import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../model/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {

    //Form Object

    form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    // Button visibility
    saveBtn:boolean = true;

    //Vector 
    vector:Person[] = [];

    //Store selected person  index
    index:number = -1;

    //Save function
    save(){

      //Vector registration
      this.vector.push(this.form.value as Person);

      //Cleaning inputs

      this.form.reset();

      //Console visualization
      //console.table(this.vector);

    }

    select(index:number){

      //Attribute person index
      this.index = index;

      ////Attribute person index
      this.form.setValue({
        name  : this.vector[index].name,
        age  : this.vector[index].age,
        city  : this.vector[index].city
      });

      // Button visibility
    this.saveBtn = false;

    }


    update(){

      //Update vector
      this.vector[this.index] = this.form.value as Person;

      //Cleaning inputs

      this.form.reset();

      // Button visibility
    this.saveBtn = true;

    }


    remove(){

      //Remove person in vector
      this.vector.splice(this.index,1);

      //Cleaning inputs

      this.form.reset();

      // Button visibility
    this.saveBtn = true;

    }

    cancel(){


      //Cleaning inputs

      this.form.reset();

      // Button visibility
    this.saveBtn = true;

    }

}
