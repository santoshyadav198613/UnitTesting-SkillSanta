import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todos } from '../todos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodosList(): Observable<Todos[]> {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
