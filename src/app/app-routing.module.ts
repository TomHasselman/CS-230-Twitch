import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChannelPlayerComponent } from './channel-player/channel-player.component';
import { HomeComponent } from './home/home.component';
import { FollowingTabComponent } from './following-tab/following-tab.component';
import { BrowseTabComponent } from './browse-tab/browse-tab.component';
import { CategoryLayoutComponent } from './category-layout/category-layout.component';
import { AddChannelComponent } from './home/add-channel/add-channel.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: 'channel-player', component: ChannelPlayerComponent},
  {path: '', component: HomeComponent},
  {path: 'following-tab', component: FollowingTabComponent},
  {path: 'browse-tab', component: BrowseTabComponent},
  {path: 'browse-tab/category-layout', component: CategoryLayoutComponent},
  {path: 'admin', component: AddChannelComponent},
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
