import { ApplicationConfig, Injectable } from '@angular/core';
import { Clothes } from '../../shared/models/Clothes';

@Injectable({
  providedIn: 'root'
})

export class ClothesService {  
  constructor() {
    console.log();
  }

  getAllShirts():Clothes[]{
    return [
      {
        id: 1,
        name: 'Black Basic Shirt',
        price: 10,
        favorite: false,
        stars: 4.5,
        imageUrl: '/assets/clothes/shirts/shirt-1.jpg',
        tags: ['shirt', 'black', 'summer'],
      },
      {
        id: 2,
        name: 'Gray Basic Shirt',
        price: 10,
        favorite: true,
        stars: 4.7,
        imageUrl: '/assets/clothes/shirts/shirt-2.jpg',
        tags: ['shirt', 'gray', 'summer'],
      },
      {
        id: 3,
        name: 'White Basic Shirt',
        price: 10,
        favorite: false,
        stars: 3.5,
        imageUrl: '/assets/clothes/shirts/shirt-3.jpg',
        tags: ['shirt', 'white', 'summer'],
      },
      {
        id: 4,
        name: 'Dark Gray Shirt',
        price: 15,
        favorite: true,
        stars: 4.3,
        imageUrl: '/assets/clothes/shirts/shirt-4.jpg',
        tags: ['shirt', 'gray', 'summer'],
      },
      {
        id: 5,
        name: 'Spider Gray Shirt',
        price: 15,
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/clothes/shirts/shirt-5.jpg',
        tags: ['shirt', 'gray', 'summer', 'spider'],
      },
      {
        id: 6,
        name: 'Vanilla Shirt',
        price: 15,
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/clothes/shirts/shirt-6.jpg',
        tags: ['shirt', 'vanilla', 'summer'],
      }
    ]
  }
}
