import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {

    //Form Object

    form = new FormGroup({
      name: new FormControl(''),
      age  : new FormControl(null),
      city: new FormControl('')
    });

}
