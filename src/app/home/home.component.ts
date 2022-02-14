import { Component, OnInit } from '@angular/core';
import { channel_list } from './channel_list';
import { ChannelModel } from './channel_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  channels: ChannelModel [] = [];

  constructor() { 
    for (var channel of channel_list) {
      console.log(channel);
      this.channels.push(channel);
    }
  }

  ngOnInit(): void {
  }

}
