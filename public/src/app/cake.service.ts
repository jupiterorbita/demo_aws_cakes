import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private _http: HttpClient) {

  }

  getCakes() {
    console.log('going to get cakes from the server');
    return this._http.get('/cakes');
  }

  newCake(Cake) {
    console.log('cake.service.ts > going to create a new cake on server');
    return this._http.post('/create', Cake);
  }

  getOneCake(cake) {
    console.log('cake.service.ts > getting ONE cake');
    return this._http.get('/cake/' + cake._id);
  }

  // commentCake(cake) {
  //   console.log('cake.service.ts > commenting to server', cake);
  //   return this._http.put('/update/' + cake._id, cake);
  // }







}
