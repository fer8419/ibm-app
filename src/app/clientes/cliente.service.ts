import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Cliente } from './cliente-form';
import { AppSettings } from '../app-settings';

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> { 
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');   
    return this.http.get(AppSettings.API_ENDPOINT_CLIENTES + '/cliente', {headers: headers}).map(result=>result as Cliente[]);
  }

  eliminar(codigo: number): Observable<Object> {    
    return this.http.delete(AppSettings.API_ENDPOINT_CLIENTES + '/cliente/' + codigo);    
  }

  insertar(cliente: Cliente): Observable<Object> {
    let body = JSON.stringify(cliente);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.post(AppSettings.API_ENDPOINT_CLIENTES + '/cliente', body, options);    
  }

  consultar(codigo: number): Observable<Object> {    
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.get(AppSettings.API_ENDPOINT_CLIENTES + '/cliente/' + codigo, options);    
  }

  editar(cliente: Cliente): Observable<Object> {
    let body = JSON.stringify(cliente);
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
    return this.http.put(AppSettings.API_ENDPOINT_CLIENTES + '/cliente', body, options);    
  }
}
