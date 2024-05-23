import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  // Variable to show or hide the square
  show:boolean = true;

   // Function to show or hide the square
   action(){
    if(this.show === true){
      this.show = false;
    }else{
      this.show = true;
    }
  }

}
