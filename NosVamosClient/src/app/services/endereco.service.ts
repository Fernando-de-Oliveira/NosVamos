import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEnd() {
    return this.http.get(`${this.API_URI}/endereco`)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.status || "Server Error")
  }

  getEndById(id: string):Observable<any>{
    return this.http.get(`${this.API_URI}/endereco/${id}`)
    .catch(this.errorHandler);
  }

  deleteEnd(id: string) {
    return this.http.delete(`${this.API_URI}/endereco/${id}`);
  }

  saveEndereco(endereco: Endereco) {
    return this.http.post(`${this.API_URI}/endereco`, endereco)
    .catch(this.errorHandler);
  }

  updateEndereco(id: string|number, updatedEndereco: Endereco) {
    return this.http.put(`${this.API_URI}/endereco/${id}`, updatedEndereco);
  }
  getEndByLogra(endereco:Endereco):Observable<any>{
    return this.http.post(`${this.API_URI}/endereco/endByLogra/`, endereco)
    .catch(this.errorHandler);
    }
}
