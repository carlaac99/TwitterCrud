import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../tweet.service';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  tweets: any= [
 
 ]
 tweetDetail:any ;
 id:any;
  constructor(private route: ActivatedRoute, private _tweetService: TweetService) { }
  
  ngOnInit(): void {
    //Grabbed the route params from the route object
    this.route.params.subscribe(params=>{
      console.log(params)
      // we stored the id params in our own id property
      this.id=params['id']
      
    });
    //1.write the call to service
    //2 . define the service Get Tweet Detail function
    //3. Define the route/controller for the tweet detail on the express side

    // searched for tweet with an id matching
    this.tweets=this._tweetService.findTweet(this.id).subscribe(responseData=>{
      console.log( responseData);
      this.tweetDetail = responseData;
      // console.log(this.tweetDetail[0].name)
    });
    ;

  }

}
