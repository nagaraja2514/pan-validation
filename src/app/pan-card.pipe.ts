import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'panCard'
})
export class PanCardPipe implements PipeTransform {

  panData: string = '[A-Z]{5}[0-9]{4}[A-Z]{1}';

  transform(data: any): any {
    return data.match(this.panData) ? "pan number is correct" : "pan number is check once";


}
}