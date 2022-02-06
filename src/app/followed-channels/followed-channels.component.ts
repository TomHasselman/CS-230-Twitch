import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-followed-channels',
  templateUrl: './followed-channels.component.html',
  styleUrls: ['./followed-channels.component.css']
})
export class FollowedChannelsComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() viewers: number;
  @Input() category: string;

  constructor() {
    this.img = "https://static-cdn.jtvnw.net/jtv_user_pictures/1be7f247-c32a-41df-b8ba-3486fe995b79-profile_image-70x70.png";
    this.name = "Dash Ducks";
    this.viewers = 347;
    this.category = "Animals, Aquariums, and Zoos";
   }

  ngOnInit(): void {
  }

}
