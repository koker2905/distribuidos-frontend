import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root'
}) 
export class EstudianteService {
  private apiUrl = '/api/estudiantes';


  constructor(private http: HttpClient) {}

  listar(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  guardar(est: Estudiante): Observable<any> {
    return this.http.post(this.apiUrl, est);
  }
}
