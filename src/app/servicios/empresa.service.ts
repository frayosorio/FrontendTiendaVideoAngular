import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlBase + "empresas";
  }

  public listar(): Observable<any> {
    let urlT = this.url + "/listar";
    return this.http.get<any[]>(urlT);
  }

}
