import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { PCD } from '../models/PCD';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PcdService {

  API_URI = "http://localhost:3000/api"
  constructor(private http: HttpClient) { }

  getPCD(){
    return this.http.get(`${this.API_URI}/pcd`);
  }

  getPcdById(id: string){
    return this.http.get(`${this.API_URI}/pcd/${id}`);
  }

  savePCD(pcd: PCD){
    return this.http.post(`${this.API_URI}/pcd`, pcd);
  }

  deletePDC(id: string) {
    return this.http.delete(`${this.API_URI}/pcd/${id}`);
  }

  updatePCD(id: string|number, updatedPCD: PCD){
    return this.http.put(`${this.API_URI}/pcd/${id}`, updatedPCD)
  }
}
