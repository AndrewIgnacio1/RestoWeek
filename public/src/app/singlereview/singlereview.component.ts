import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-singlereview',
  templateUrl: './singlereview.component.html',
  styleUrls: ['./singlereview.component.css']
})
export class SinglereviewComponent implements OnInit {

  resto: any;
  newreview = {
    "name" : "",
    "rating" : 5,
    "comment" : ""
  }
  errors = {};

  constructor(private _httpservice: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getResto(params['id']);
    })
  }

  getResto(id){
    let observable = this._httpservice.getOne(id);
    observable.subscribe( data => {
      console.log(data['restaurant']);
      this.resto = data['restaurant']
    })
  }

  newRating(id){
    let observable = this._httpservice.addReview(id, this.newreview);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate([`resto/${id}`]);
      }
    })
  }

  cancel(id){
    this._router.navigate([`resto/${id}`]);
  }

}
