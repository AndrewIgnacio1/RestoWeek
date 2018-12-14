import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  title = 'public';
  resto = {};
  restaurants = [];
  update = false;

  constructor(private _httpservice: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllRestos();
  }

  getAllRestos(){
    let observable = this._httpservice.getRestos();
    observable.subscribe( data => {
      this.restaurants = data['restaurants'];
      console.log(data);
    });
  }

  delete(id){
    let observable = this._httpservice.deleteOne(id);
    observable.subscribe( data => {
        this.getAllRestos();
        this._router.navigate(['/']);
    })
  }

  edit(id){
    this.update = true;
  }
}
