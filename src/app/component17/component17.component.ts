import { Component } from '@angular/core';

@Component({
  selector: 'app-component17',
  standalone: true,
  imports: [],
  templateUrl: './component17.component.html',
  styleUrl: './component17.component.css'
})
export class Component17Component {

  name:string = 'Joao';

  average:number = 0;


  calculation(n1:number, n2:number){
    return (n1+n2)/2;
  }

}
