import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component';

import { NewTweetPageComponent } from './new-tweet-page/new-tweet-page.component';
const routes: Routes = [
  // HomePageComponent
  {path:'', component: HomePageComponent},
  {path:'home', component: HomePageComponent},
  //NewTweetPageComponent
  {path:'new', component: NewTweetPageComponent},

  //DetailPageComponent
  {path:'detail/:id', component:DetailPageComponent},
  {path:'update/:id', component:UpdateTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
