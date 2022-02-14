import { Component, OnInit } from '@angular/core';
import { channel_list } from '../home/channel_list';
import { ChannelModel } from '../home/channel_model';

@Component({
  selector: 'app-following-tab',
  templateUrl: './following-tab.component.html',
  styleUrls: ['./following-tab.component.css']
})
export class FollowingTabComponent implements OnInit {
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
