import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average',
  standalone: true
})
export class AveragePipe implements PipeTransform {

  transform(obj:any): number {
    return (obj.grade1+obj.grade2)/2;
  }

}
