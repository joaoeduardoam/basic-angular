import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './component13.component.html',
  styleUrl: './component13.component.css'
})
export class Component13Component {

  
  products:Product[] = [];

  //Button Visibility
  btnSave:boolean = true;

  // Form Object
  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(),
    value: new FormControl(null)
  })

  // Termo pesquisado
  termoPesquisado:string = '';

  constructor(private service:ProductService){}

  //At Component Initialization
  ngOnInit(){
    this.select();
  }

  select(){
    this.service.select().subscribe(sendBack => {this.products = sendBack});
  }

  save(){
    this.service.save(this.form.value as Product).subscribe(sendBack => {
                                              this.products.push(sendBack);
                                              this.form.reset();
    });
  }

  selectProduct(index:number){
    this.form.setValue({
      id : this.products[index].id,
      name : this.products[index].name,
      value : this.products[index].value      
    });

    this.btnSave = false;
  }


  update(){
    this.service.update(this.form.value as Product).subscribe(sendBack => {
                                              let updatedIndex = this.products.findIndex(obj => {
                                                                              return this.form.value.id === obj.id;
                                              });

                                              this.products[updatedIndex] = sendBack;
                                              this.form.reset();
                                              this.btnSave = true;
    });
  }


  remove(){
    this.service.remove(this.form.value.id).subscribe(() => {
                                              let removedIndex = this.products.findIndex(obj => {
                                                                              return this.form.value.id === obj.id;
                                              });

                                              this.products.splice(removedIndex,1);
                                              this.form.reset();
                                              this.btnSave = true;
    });
  }



}
