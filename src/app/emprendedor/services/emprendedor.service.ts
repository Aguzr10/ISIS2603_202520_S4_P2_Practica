import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  private baseListado = 
    'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json';

  private baseDetalle = 
    'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/';

  constructor(private http: HttpClient) { }

  
  getListado(): Observable<any> {
    return this.http.get<any>(this.baseListado);
  }

  
  getDetalle(id: number): Observable<any> {
    const url = `${this.baseDetalle}/${id}/emprendedor.json`;
    return this.http.get<any>(url);
  }

}
