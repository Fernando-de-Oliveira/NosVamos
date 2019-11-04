import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Trajeto } from '../models/Trajeto';

import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class TrajetoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTrajeto() {
    return this.http.get(`${this.API_URI}/trajeto`)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.status || "Server Error")
  }

  getTrajetoById(id: string):Observable<any>{
    return this.http.get(`${this.API_URI}/trajeto/${id}`)
    .catch(this.errorHandler);
  }

  deleteTrajeto(id: string) {
    return this.http.delete(`${this.API_URI}/trajeto/${id}`);
  }

  saveTrajeto(trajeto: Trajeto) {
    return this.http.post(`${this.API_URI}/trajeto`, trajeto)
    .catch(this.errorHandler);
  }

  updateTrajeto(id: string|number, updatedTrajeto: Trajeto) {
    return this.http.put(`${this.API_URI}/trajeto/${id}`, updatedTrajeto);
  }
}
