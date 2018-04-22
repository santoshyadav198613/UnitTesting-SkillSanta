import { TestBed, inject, async } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { Todos } from '../todos';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('TodosService', () => {
  let httpService: { get: jasmine.Spy, post: jasmine.Spy };
  let todosService: TodosService;
  beforeEach(() => {
    httpService = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    todosService = new TodosService(<any>httpService);
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('should get todolist', async(() => {
    const todoList: Todos[] = [{ id: 1, title: 'test', completed: true, userId: 1 }];

    httpService.get.and.returnValue(Observable.of(todoList));

    todosService.getTodosList().subscribe(
      (data) => expect(data).toEqual(todoList)
    );

  }));

});
