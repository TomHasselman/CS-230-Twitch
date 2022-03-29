import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels.service';
import { ChannelModel } from '../channel_model';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {

  constructor(public cs : ChannelsService) { }

  ngOnInit(): void {
  }

  addChannel(channel : ChannelModel) {
    this.cs.addChannel(channel);
  }

}
