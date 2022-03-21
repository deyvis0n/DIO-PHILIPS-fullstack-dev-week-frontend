import { Injectable } from '@angular/core';
import { Incidencia } from '../model/incidencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(
    private http:HttpClient
  ) { }

  listIncidencias(): Observable<Incidencia[]> {
    //const url = './assets/incidencias.json';
    const url = '/api/incidencia'
    return this.http.get<Incidencia[]>(url);
    
  }
}
