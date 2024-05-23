import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // Image Variable
  image:string = 'assets/dia.jpg';

  changeImage(){
    if(this.image === 'assets/dia.jpg'){ // Three equal signs: strict equality, checking both the value and the data type
      this.image = 'assets/por.jpg'
    }else{
      this.image = 'assets/dia.jpg'
    }
  }

}
