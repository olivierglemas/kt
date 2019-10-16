import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';
import { HomeResolver} from '../home/home.resolver'
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: '../categories/categories.module#CategoriesPageModule'
          },
          {
            path: 'home',
            loadChildren: '../home/home.module#HomePageModule'
          },
         
          {
            path: 'details/:productId',
            resolve:{
              filmId:HomeResolver
            },
            loadChildren: '../details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../user/profile/user-profile.module#UserProfilePageModule'
          },
          {
            path: 'friends',
            loadChildren: '../user/friends/user-friends.module#UserFriendsPageModule'
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: '../notifications/notifications.module#NotificationsPageModule'
          }
        ]
      },
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
