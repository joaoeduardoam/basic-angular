import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    value: new FormControl(null, [Validators.required, Validators.min(0.01)])
  })

  // Termo pesquisado
  searchTerm:string = '';

  constructor(private service:ProductService){}

  //At Component Initialization (after html is mounted) run select() for initialization of vector products
  ngOnInit(){
    this.select();
  }

  // The API return (service.select()) receives the name sendBack and the vector products receives the sendBack value
  select(){
    this.service.select().subscribe(sendBack => {this.products = sendBack});
  }

  save(){

    let existingNamePosition = this.products.findIndex(obj => {return obj.name === this.form.value.name});

    if(existingNamePosition != -1){
      alert('The name entered already exists, please register another product.')
    }else{
        
      this.service.save(this.form.value as Product).subscribe(sendBack => {
                                                this.products.push(sendBack);
                                                this.form.reset();
      });
    
    }
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
