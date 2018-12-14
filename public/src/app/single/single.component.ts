import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  resto: any;
  revs = [];

  constructor(private _httpservice: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.getResto(params['id']);
    })
  }

  getResto(id){
    let observable = this._httpservice.getOne(id);
    observable.subscribe( data => {
      this.resto = data['restaurant']
    })
  }

}
