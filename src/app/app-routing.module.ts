import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeResolver} from './home/home.resolver'
const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  
  { path: 'details/:producId',resolve:{
    filmId:HomeResolver
  }, loadChildren: './details/details.module#DetailsPageModule' },
 // { path: 'home', loadChildren: './home/listing/home-listing.module#HomeListingPageModule'},
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'showcase', loadChildren: './showcase/showcase.module#ShowcasePageModule' },
  { path: '**', redirectTo: 'page-not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
