import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FollowedChannelsComponent } from './followed-channels/followed-channels.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FollowedChannelsComponent,
    CarouselComponent,
    ChannelCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
