import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() img: string;
  @Input() name: string;
  @Input() viewers: string;
  @Input() tag: string;
  constructor() {
    this.img = "https://static-cdn.jtvnw.net/ttv-boxart/272263131-285x380.jpg";
    this.name = "Animals, Aquariums, and Zoos";
    this.viewers = "3.1K viewers";
    this.tag = "IRL";

   }

  ngOnInit(): void {
  }

}
