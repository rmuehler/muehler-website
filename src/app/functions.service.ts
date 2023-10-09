import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { FunctionsServiceAbstract } from './functions.service.abstract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService extends FunctionsServiceAbstract{

  private testUrl : string = 'https://muehler-api.azurewebsites.net/api/http_trigger';

  constructor(private http: HttpClient) { 
    super();
  }

  public override getName(): Observable<string> {
    const funcParams =  new HttpParams().set('code', 'ynhD58lT5v771-es05wtXDxivh5XpNyLfRDaLrWcOWLEAzFuLTtPyw==')
                                        .set('name', 'Roo');
    return this.http.get(this.testUrl, { responseType: 'text', params: funcParams });
  }
}