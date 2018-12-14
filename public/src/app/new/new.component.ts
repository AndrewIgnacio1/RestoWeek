import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newresto = {
    "name": '',
    "cuisine": ''
  }

  errors = {};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    let observable = this._httpService.createResto(this.newresto);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      }else{
        this._router.navigate(['/']);
      }
    });
  }

  cancel(){
    this._router.navigate(['/']);
  }
}
