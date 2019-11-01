import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Responsavel } from '../models/Responsavel';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getResponsavel() {
    return this.http.get(`${this.API_URI}/responsavel`)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.status || "Server Error")
  }

  getResponsavelById(id: string):Observable<any>{
    return this.http.get(`${this.API_URI}/responsavel/${id}`)
    .catch(this.errorHandler);
  }

  getResponsavelByCPF(cpf: string):Observable<any>{
    return this.http.get(`${this.API_URI}/responsavel/getbyCPF/${cpf}`);
  }

  deleteResponsavel(id: string) {
    return this.http.delete(`${this.API_URI}/responsavel/${id}`);
  }

  saveResponsavel(responsavel: Responsavel) {
    return this.http.post(`${this.API_URI}/responsavel`, responsavel)
    .catch(this.errorHandler);
  }

  updateResponsavel(id: string|number, updatedReposanvel: Responsavel) {
    return this.http.put(`${this.API_URI}/responsavel/${id}`, updatedReposanvel);
  }

  loginResponsavel(responsavel: Responsavel):Observable<any>{
    return this.http.post(`${this.API_URI}/responsavel/login/`, responsavel)
    .catch(this.errorHandler);
    }

}
