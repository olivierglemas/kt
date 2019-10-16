import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../components/components.module';

import { DetailsPage } from './details.page';
import { DetailsResolver } from './details.resolver';
import { DetailsService } from './details.service';


const routes: Routes = [
  {
    path: '',
    component: DetailsPage,
    resolve: {
      data: DetailsResolver
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
  declarations: [
    DetailsPage
  ],
  providers: [
    DetailsResolver,
    DetailsPage,
    DetailsService,
  ]
})
export class HomeDetailsPageModule {}
