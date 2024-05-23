import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {

  //Average variable
  average:number = 4;

  //Vector
  names:string[] = ['João', 'Amanda', 'Yan', 'Maria'];

  //Language
  language:string = 'JS'

}
