import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { Food } from 'src/app/shared/model/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag'])
      }
      else
      this.foods = this.foodService.getAll();
    }) 
  }

}
