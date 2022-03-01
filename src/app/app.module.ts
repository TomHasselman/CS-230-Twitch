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
import { CategoryLayoutComponent } from './category-layout/category-layout.component';
import { ChatComponent } from './chat/chat.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { PlayerTitleBarComponent } from './player-title-bar/player-title-bar.component';
import { PlayerDescriptionComponent } from './player-description/player-description.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http'


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
    BrowseTabComponent,
    CategoryLayoutComponent,
    ChatComponent,
    CategoryCardComponent,
    FilterBarComponent,
    CategoryBarComponent,
    PlayerTitleBarComponent,
    PlayerDescriptionComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
