import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Etapa } from '../models/Etapa';

import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EtapaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEtapa() {
    return this.http.get(`${this.API_URI}/etapa`)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.status || "Server Error")
  }

  getEtapaByIds(etapa:Etapa):Observable<any>{
    return this.http.post(`${this.API_URI}/etapa/etapaByIds/`, etapa)
    .catch(this.errorHandler);
    }

  deleteEtapa(id: string) {
    return this.http.delete(`${this.API_URI}/etapa/${id}`);
  }

  saveEtapa(etapa: Etapa) {
    return this.http.post(`${this.API_URI}/etapa`, etapa)
    .catch(this.errorHandler);
  }

  // updateEtapa(id: string|number, updatedEtapa: Etapa) {
  //   return this.http.put(`${this.API_URI}/etapa/${id}`, updatedEtapa);
  // }
}
