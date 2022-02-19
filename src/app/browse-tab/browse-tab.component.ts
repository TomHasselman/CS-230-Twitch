import { Component, OnInit } from '@angular/core';
import { category_list } from './category_list';
import { CategoryModel } from './category_model';

@Component({
  selector: 'app-browse-tab',
  templateUrl: './browse-tab.component.html',
  styleUrls: ['./browse-tab.component.css']
})
export class BrowseTabComponent implements OnInit {

  categories: CategoryModel [] = [];

  constructor() { 
    for (var category of category_list) {
      console.log(category);
      this.categories.push(category);
    }
  }

  ngOnInit(): void {
  }

}
