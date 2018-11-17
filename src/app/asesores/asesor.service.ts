import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Asesor } from './asesor-form';
import { AppSettings } from '../app-settings';

@Injectable()
export class AsesorService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Asesor[]> { 
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');   
    return this.http.get(AppSettings.API_ENDPOINT_ASESORES + '/asesor', {headers: headers}).map(result=>result as Asesor[]);
  }

  eliminar(codigo: number): Observable<Object> {    
    return this.http.delete(AppSettings.API_ENDPOINT_ASESORES + '/asesor/' + codigo);    
  }

  insertar(asesor: Asesor): Observable<Object> {
    let body = JSON.stringify(asesor);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.post(AppSettings.API_ENDPOINT_ASESORES + '/asesor', body, options);    
  }

  consultar(codigo: number): Observable<Object> {    
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.get(AppSettings.API_ENDPOINT_ASESORES + '/asesor/' + codigo, options);    
  }

  editar(asesor: Asesor): Observable<Object> {
    let body = JSON.stringify(asesor);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.put(AppSettings.API_ENDPOINT_ASESORES + '/asesor', body, options);    
  }
}
