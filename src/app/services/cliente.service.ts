import { ApiMock } from './../shared/__mocks__/values.mock';
import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<any> {
    return new Observable<any>((subscriber: Subscriber<any>) => subscriber.next(ApiMock.getClientes));
  }
}
