import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  private baseUrllistado= 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json';

  private baseUrldetalle = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/1/emprendedor.json';


  constructor(private http: HttpClient) { }

  
  getListado(): Observable<any> {
    return this.http.get<any>(this.baseUrllistado);
  }

  getDetalle(id: number | string): Observable<any> {
    const url = this.baseUrldetalle.replace('/1/', `/${id}/`);
    return this.http.get<any>(url);
  }

  
}