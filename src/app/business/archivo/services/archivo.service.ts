import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paciente } from '../interface/paciente';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  URL_API: string = 'http://localhost:9001/api/v1/paciente';

  constructor(private httpClient: HttpClient) { }

  getPacientes(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(this.URL_API + '/findAll').pipe(map(resp => resp));
  }

  savePaciente(request: Paciente[]): Observable<Paciente[]> {
    return this.httpClient.post<Paciente[]>(this.URL_API + '/save', request).pipe(map(resp => resp));
  }

  updatePaciente(request: any): Observable<any> {
    return this.httpClient.post<any>(this.URL_API + '/update/{}', request).pipe(map(resp => resp));
  }

  deletePaciente(id: number): Observable<any> {
    return this.httpClient.get<any>(this.URL_API + '/delete/{}' + id).pipe(map(resp => resp));
  }
}
