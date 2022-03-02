import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChannelModel } from "./channel_model";

@Injectable({
    providedIn: "root"
})
export class ChannelsService {

    private baseUrl:string = "https://twitch-bab27-default-rtdb.firebaseio.com/";
    private channelsEndpoint:string = "Channels.json";
    
    constructor(private http:HttpClient) {


    }

    public getChannels() {
            return this.http.get<ChannelModel []>(this.baseUrl + this.channelsEndpoint);
    }

    public getChannel(index:number) {
        return this.http.get<ChannelModel>(this.baseUrl + "channels/" + index + ".json");
    }


}