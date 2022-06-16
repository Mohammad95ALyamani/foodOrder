import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.2,
        imageUrl: '../assets/img/pizza1.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id: 2,
        name: 'Meat Ball',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['persia',' middle east',' china'],
        stars: 4.7,
        imageUrl: '../assets/img/meat-ball.jpg',
        tags:['FastFood','Pizza','Lunch']
      },
      {
        id: 3,
        name: 'Meat Burger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany',' us'],
        stars: 3.5,
        imageUrl: '../assets/img/burger1.jpg',
        tags:['FastFood','Burger']
      },
      {
        id: 4,
        name: 'Fried Potatos',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium',' france',' india'],
        stars: 3.3,
        imageUrl: '../assets/img/potato.jpg',
        tags:['FastFood','Fry']
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india',' asia'],
        stars: 3.0,
        imageUrl: '../assets/img/soup.jpg',
        tags:['SlowFood','Soup']
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: true,
        origins: ['italy'],
        stars: 1.7,
        imageUrl: '../assets/img/pizza2.jpg',
        tags:['FastFood','Pizza','Lunsh']
      },
      {
        id: 7,
        name: 'Vegetables spicy Pizza',
        cookTime: '20-30',
        price: 10,
        favorite: false,
        origins: ['india'],
        stars: 4.8,
        imageUrl: '../assets/img/spicy-pizza.jpg',
        tags:['FastFood','Pizza','Lunsh']
      },
      {
        id: 7,
        name: 'Vegetables Burger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['india'],
        stars: 2.9,
        imageUrl: '../assets/img/burger2.jpg',
        tags:['FastFood','Burger']
      },
    ]
  }

  getAllFoodByTag(tag: string):Food[]{
    return tag == 'All'?
    this.getAll() : this.getAll().filter(food => food.tags.includes(tag));

    // if(tag == 'All')
    // return this.getAll();
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name:'All', count: 14},
      {name:'FastFood', count: 4},
      {name:'Pizza', count: 2},
      {name:'Lunch', count: 3},
      {name:'SlowFood', count: 2},
      {name:'Burger', count: 1},
      {name:'Fry', count: 1},
      {name:'Soup', count: 1},
    ]
  }
}
