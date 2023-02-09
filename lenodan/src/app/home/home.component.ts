import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() { }
  //Slider settings
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
  ngOnInit(): void {
  }
}
