import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-component15-form',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './component15-form.component.html',
  styleUrl: './component15-form.component.css'
})
export class Component15FormComponent {

  name:string = '';

  @Output() function = new EventEmitter<string>();


  //Sends name that came from form (input text) to component15.html
  saveName(){
    this.function.emit(this.name);
  }

}
