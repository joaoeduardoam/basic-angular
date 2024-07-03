import { Component } from '@angular/core';
import { PersonCrudComponentTableComponent } from "../person-crud-component-table/person-crud-component-table.component";
import { PersonCrudComponentFormComponent } from "../person-crud-component-form/person-crud-component-form.component";
import { PersonService} from '../service/person.service';
import { CommonModule } from '@angular/common';
import { Person } from '../model/Person';
@Component({
    selector: 'app-person-crud-component',
    standalone: true,
    templateUrl: './person-crud-component.component.html',
    styleUrl: './person-crud-component.component.css',
    imports: [PersonCrudComponentTableComponent, PersonCrudComponentFormComponent]
})
export class PersonCrudComponentComponent {

  
  constructor(private service:PersonService){}

  persons:Person[] = [];
  
  // save(name:string){
  //   this.names.push(name);
  // }

  ngOnInit(){
    this.select();
  } 

  // The API return (service.select()) receives the name sendBack and the vector products receives the sendBack value
  select(){
    this.service.select().subscribe(sendBack => {this.persons = sendBack});
    // console.log(this.persons);
  }

  save(person:Person){
    
      this.service.save(person).subscribe(sendBack => {
                                                this.persons.push(sendBack);
                                                // this.form.reset();
      });

  }

  
  

}
