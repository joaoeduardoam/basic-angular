import { Component } from '@angular/core';
import { Component15TableComponent } from "../component15-table/component15-table.component";
import { Component15FormComponent } from "../component15-form/component15-form.component";

@Component({
    selector: 'app-component15',
    standalone: true,
    templateUrl: './component15.component.html',
    styleUrl: './component15.component.css',
    imports: [Component15TableComponent, Component15FormComponent]
})
export class Component15Component {

  names:string[] = ['Joao','Amanda', 'Yan', 'Maria'];
  
  save(name:string){
    this.names.push(name);
  }



}
