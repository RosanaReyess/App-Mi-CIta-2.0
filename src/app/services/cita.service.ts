import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citas } from '../models/citas';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  url = 'http://localhost:4000/api/citas/'

  constructor(private http: HttpClient) { }

  getCitas():Observable<any>{
    return this.http.get(this.url)
  }
  eliminarCita(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarCita(cita: Citas):Observable<any>{
    return this.http.post(this.url, cita)
  }
  obtenerCita(id: string):Observable<any>{
    return this.http.get(this.url + id)
  }
  editarCita(id: string, cita: Citas):Observable<any>{
    return this.http.put(this.url + id, cita)
  }
}
