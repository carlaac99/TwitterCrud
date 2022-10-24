import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewTweetPageComponent } from './new-tweet-page/new-tweet-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { UpdateTweetComponent } from './update-tweet/update-tweet.component'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewTweetPageComponent,
    DetailPageComponent,
    UpdateTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
