import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../model/Person';

@Component({
  selector: 'app-person-crud-component-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-crud-component-table.component.html',
  styleUrl: './person-crud-component-table.component.css'
})
export class PersonCrudComponentTableComponent {

  @Input() vector:Person[] = [];

  @Output() function = new EventEmitter<number>();


  //Sends name that came from form (input text) to component15.html
  selectPerson(idx:number){
    this.function.emit(idx);
  }

}
