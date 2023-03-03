import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<router-outlet></router-outlet> <app-home></app-home>`,
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'lenodan';
}
