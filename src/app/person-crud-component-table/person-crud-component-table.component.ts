import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../model/Person';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-crud-component-table',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './person-crud-component-table.component.html',
  styleUrl: './person-crud-component-table.component.css'
})
export class PersonCrudComponentTableComponent {

  @Input() vector:Person[] = [];

  @Output() outputSelectedIndex = new EventEmitter<number>();


  //Sends idx that came from form (button) to person-crud-component.html
  selectPerson(idx:number){
    this.outputSelectedIndex.emit(idx);
  }



}
