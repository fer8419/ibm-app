import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Tarjeta } from './tarjeta-form';
import { AppSettings } from '../app-settings';

@Injectable()
export class TarjetaService {

  constructor(private http: HttpClient) { }

  eliminar(codigo: number): Observable<Object> {    
    return this.http.delete(AppSettings.API_ENDPOINT_CLIENTES + '/cliente/' + codigo);    
  }

  insertar(tarjeta: Tarjeta): Observable<Object> {
    let body = JSON.stringify(tarjeta);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.post(AppSettings.API_ENDPOINT_CLIENTES + '/tarjeta', body, options);    
  }

  consultar(codigo: number): Observable<Object> {    
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.get(AppSettings.API_ENDPOINT_CLIENTES + '/tarjeta/' + codigo, options);    
  }

  editar(tarjeta: Tarjeta): Observable<Object> {
    let body = JSON.stringify(tarjeta);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.put(AppSettings.API_ENDPOINT_CLIENTES + '/tarjeta', body, options);    
  }
}
