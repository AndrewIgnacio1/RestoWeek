import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  resto = {};
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
      console.log("from edit", data);
      this.resto = data['restaurant']
    })
  }

  update(id){
    let observable = this._httpservice.updateOne(id, this.resto);
    observable.subscribe( data => {
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
    })
  }

}
