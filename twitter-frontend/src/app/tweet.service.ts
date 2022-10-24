import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TweetService {
private SERVER_URL: string = "http://localhost:4000";
  constructor(private http: HttpClient) { }

  fetchAllTweets(){
    return this.http.get(this.SERVER_URL + '/tweets');
  }

  createTweet(newTweet: Array<object>){
    return this.http.post(this.SERVER_URL+"/tweets",{...newTweet});
  }

  findTweet(id:any){
    return this.http.get(this.SERVER_URL+`/tweets/find/${id}`);
  }
  deleteTweet(id:any){
    return this.http.delete(this.SERVER_URL+`/tweets/delete/${id}`);
  }
  updateTweet(id:any,description:any,name:any){
    return this.http.post(this.SERVER_URL+ `/tweets/update`,{id,description,name});
  }
}
