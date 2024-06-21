import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AveragePipe } from "../pipe/average.pipe";

@Component({
    selector: 'app-component12',
    standalone: true,
    templateUrl: './component12.component.html',
    styleUrl: './component12.component.css',
    imports: [CommonModule, AveragePipe]
})
export class Component12Component {

  name:string = 'Joao';
  obj:any = {'name':'Joao', 'age':37};
  value:number = 12345.6789;
  currentDate: Date = new Date(); 
  number:number = 0.23;
  vector: any[] = ['blue', 'green', 'red', 'yellow', 'pink'];
  text: string = 'Hello World!';
  title:string = 'Learning angular 17 on Ralf Lima channel';
  myObservable:Observable<number> = of(42);
  myPromise:Promise<string> = Promise.resolve('Hello World!');

   // Object Vector
 students:any = [
  {'name':'Joao',     'grade1':8, 'grade2':9},
  {'name':'Amanda',   'grade1':7, 'grade2':8},
  {'name':'Yan',      'grade1':3, 'grade2':2},
  {'name':'Maria',    'grade1':7, 'grade2':7}
];
}
