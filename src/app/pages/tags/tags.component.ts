import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/food/food.service';
import { Tag } from 'src/app/shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags!: Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTag()
  }

}
