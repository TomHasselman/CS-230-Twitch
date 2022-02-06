import { Component, OnInit } from '@angular/core';
import { SidebarChannelModel } from './sidebar_channel_model';
import { sidebar_channel_list } from './sidebar_channel_list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar_channels: SidebarChannelModel [] = [];

  constructor() { 
    for (var sidebar_channel of sidebar_channel_list) {
      console.log(sidebar_channel);
      this.sidebar_channels.push(sidebar_channel);
    }
  }

  ngOnInit(): void {
  }

}
