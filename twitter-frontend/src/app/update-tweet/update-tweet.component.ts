import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-update-tweet',
  templateUrl: './update-tweet.component.html',
  styleUrls: ['./update-tweet.component.css']
})
export class UpdateTweetComponent implements OnInit {
  currentTweet: any;
  updatedTweet: any = {
    id: 0,
    name:'',
    description: ''
  }

  constructor(private _twitterService:TweetService,private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params)
      // we stored the id params in our own id property
      this.updatedTweet.id=params['id']
      
    });
    this._twitterService.findTweet(this.updatedTweet.id).subscribe(data=>{
      
      this.currentTweet=data;
      this.updatedTweet=this.currentTweet;
      console.log(this.currentTweet[0].description);

    })

  }

  updateTweet(){
    this._twitterService.updateTweet(this.updatedTweet.id,this.updatedTweet.description,this.updatedTweet.name).subscribe(responseData=>{
      console.log(responseData);
      this._router.navigate(['/']);

    });
    
  }
  onChange(){
    console.log(this.updatedTweet);
    console.log(this.updatedTweet.name)
  }


}
