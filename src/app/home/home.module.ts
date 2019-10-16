import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { HomePage } from './home.page';
import { HomeResolver } from './home.resolver';
import { HomeService } from './home.service';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      data: HomeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers: [
    HomeResolver,
    HomeService
  ]
})
export class HomePageModule {}
