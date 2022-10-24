import { Component, OnInit } from '@angular/core';
import {TweetService } from '../tweet.service';
import { Router,ActivatedRoute } from '@angular/router';
// Decorator/Annotations/Metadata
// Lets Angular know that this class object is an Angular component
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  tweets: any= []
  id:any;

  constructor(private _tweetService: TweetService, private _router : Router) { }

  ngOnInit() {

    this._tweetService.fetchAllTweets().subscribe(responseData =>{
      this.tweets = responseData;
      console.log('Response from Express API:', responseData);

    });
  


  }
  deleteTweet(id:any){
    this.id=id;
    this._tweetService.deleteTweet(this.id).subscribe(responseData=>{
      console.log("tweetdeleted");
      // window.location.reload();
      this.ngOnInit();



    });
  }

}