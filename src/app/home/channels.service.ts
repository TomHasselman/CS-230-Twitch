import { Injectable } from "@angular/core";
import { ChannelModel } from "./channel_model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: "root"
})
export class ChannelsService {

    private baseUrl:string = "https://twitch-bab27-default-rtdb.firebaseio.com/";
    private channelsEndpoint:string = "Channels.json";
    
    constructor(private db: AngularFireDatabase) {


    }

    public getChannels() {
        return this.db.list<ChannelModel>("Channels").valueChanges();
    }

    public getChannel(index:number) {

    }

    addChannel(channel : ChannelModel) {
        this.db.list<ChannelModel>("Channels").push(channel);
    }

}