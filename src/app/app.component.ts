import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pan-validation';

  data: string = ''
  value: boolean = false

  clickMe() {
    console.log(this.data)
    this.value = true;
  }
}
