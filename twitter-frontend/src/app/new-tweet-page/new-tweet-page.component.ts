import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-new-tweet-page',
  templateUrl: './new-tweet-page.component.html',
  styleUrls: ['./new-tweet-page.component.css']
})
export class NewTweetPageComponent implements OnInit {
  newTweet: any = {
    id: 0,
    name:'',
    description: ''
  }
  constructor(private _tweetService : TweetService, private _router : Router) { }

  ngOnInit(): void {
  }
  submitForm(){
    //Finalize your api call
    //send the  data over somewhere else/make an operation
    console.log(this.newTweet);

    // Overall steps we need to cover
    // update the component to send data to service
    // create service function to send api call
    // create the route and controller function on our backend api

    this._tweetService.createTweet(this.newTweet).subscribe((responseData)=>{
      console.log('this is the response data',responseData );
      this._router.navigate(['/']);

    });

    console.log(this.newTweet.name);
    

  }
  onChange(){
    console.log('I changed');
    console.log(this.newTweet);

  }

}
