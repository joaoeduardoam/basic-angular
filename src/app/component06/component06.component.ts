import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component06.component.html',
  styleUrl: './component06.component.css'
})
export class Component06Component {

  //Variable conteining a language (HTML, CSS, JS)
  language:string = 'HTML';

}
