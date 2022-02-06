import { Component } from '@angular/core';
import { channel_list } from './channel_list';
import { ChannelModel } from './channel_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitch';
  channels: ChannelModel [] = [];

  constructor() {
    for (var channel of channel_list) {
      console.log(channel);
      this.channels.push(channel);
    }
  }
}
