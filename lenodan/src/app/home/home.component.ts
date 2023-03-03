import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'mobiles',
      },
    },
    {
      banerimage: 'Baner/Baner_Laptop.png',
      category: {
        id: 1,
        category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      banerimage: 'Baner/Baner_Chair.png',
      category: {
        id: 1,
        category: 'furniture',
        subCategory: 'chairs',
      },
    },
  ];
  constructor(private router: Router) {

  }

  ngOnInit(): void {}
}


// export class HomeComponent {
//   constructor() { }
//   //Slider settings
//   slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };
//   ngOnInit(): void {
//   }
// }
