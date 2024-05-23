import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  //Variables
  name:string = 'João Eduardo';
  age:number = 36;

}
