import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private testUrl : string = 'https://muehler-api.azurewebsites.net/api/http_trigger';


  constructor(private http: HttpClient) { }

  getName() {
    const funcParams =  new HttpParams().set('code', 'ynhD58lT5v771-es05wtXDxivh5XpNyLfRDaLrWcOWLEAzFuLTtPyw==')
                                        .set('name', 'Roo');
    return this.http.get(this.testUrl, { responseType: 'text', params: funcParams });
  }
}