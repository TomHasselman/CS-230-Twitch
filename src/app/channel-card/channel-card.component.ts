import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.css']
})
export class ChannelCardComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() name: string;
  @Input() viewers: number;
  @Input() language: string;
  @Input() category: string;
  @Input() thumbnail: string;

  constructor() { 
    this.img = "https://static-cdn.jtvnw.net/jtv_user_pictures/1be7f247-c32a-41df-b8ba-3486fe995b79-profile_image-50x50.png";
    this.title = "Relax and enjoy our views. PEASfull day on the pond.";
    this.name = "Dash Ducks";
    this.viewers = 347;
    this.language = "English";
    this.category = "Animals, Aquariums, and Zoos";
    this.thumbnail = "https://static-cdn.jtvnw.net/previews-ttv/live_user_dashducks-440x248.jpg";
  }

  ngOnInit(): void {
  }

}
