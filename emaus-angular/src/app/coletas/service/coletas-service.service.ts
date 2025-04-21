import { Injectable } from '@angular/core';
import { Coletas }    from '../model/coletas';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap }        from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColetasServiceService {

  private readonly API = '/assets/coletas.json';
  constructor(private httpClient: HttpClient) { }

  coletas_list() {
    return this.httpClient.get<Coletas[]>(this.API).pipe(
      first(),
      tap(coletas => console.log(coletas))
    );
  }
}
