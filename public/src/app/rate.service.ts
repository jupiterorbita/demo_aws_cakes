import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private _http: HttpClient) {

   }

   commentCake(cakeid, new_comment) {

    console.log('Rate.service.ts > commenting to server', cakeid, new_comment);
    return this._http.put('/update/' + cakeid, new_comment);
  }
}
