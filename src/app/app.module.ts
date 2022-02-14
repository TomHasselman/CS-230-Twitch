import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navigation/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FollowedChannelsComponent } from './followed-channels/followed-channels.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { AppRoutingModule } from './app-routing.module';
import { ChannelPlayerComponent } from './channel-player/channel-player.component';
import { HomeComponent } from './home/home.component';
import { FollowingTabComponent } from './following-tab/following-tab.component';
import { BrowseTabComponent } from './browse-tab/browse-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FollowedChannelsComponent,
    CarouselComponent,
    ChannelCardComponent,
    ChannelPlayerComponent,
    HomeComponent,
    FollowingTabComponent,
    BrowseTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
