import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getRestos(){
    return this._http.get('/restaurants');
  }

  createResto(resto){
    return this._http.post('/restaurant', resto);
  }

  getOne(id){
    return this._http.get(`/restaurant/${id}`);
  }

  addReview(id, review){
    return this._http.post(`/restaurant/${id}/review`, review);
  }

  updateOne(id, resto){
    return this._http.put(`/restaurant/${id}`, resto);
  }

  deleteOne(id){
    return this._http.delete(`/restaurant/${id}`);
  }
}
