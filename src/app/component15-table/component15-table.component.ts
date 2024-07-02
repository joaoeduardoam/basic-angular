import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component15-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component15-table.component.html',
  styleUrl: './component15-table.component.css'
})
export class Component15TableComponent {

  @Input() vector:string[] = [];

}
