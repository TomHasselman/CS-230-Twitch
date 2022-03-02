import { Component, OnInit } from '@angular/core';
import { ChannelsService } from './channels.service';
import { channel_list } from './channel_list';
import { ChannelModel } from './channel_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  channels: ChannelModel [] = [];

  constructor(private channelsService:ChannelsService) { 
    
  }

  ngOnInit(): void {
    this.channelsService.getChannels().subscribe(data => {
      console.log("Fetching channel data");
      for(var channel of data) {
        console.log(channel);
        this.channels.push(channel);
      }
    })
  }

}
