import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {

  // Logic Variable
  condition:boolean = false;

  list:string[] = ['Approved', 'Approved', 'Reproved'];

}
