import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component10',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component10.component.html',
  styleUrl: './component10.component.css'
})
export class Component10Component {

  form = new FormGroup({

    name : new FormControl(''),
    city : new FormControl('')

  });

}
