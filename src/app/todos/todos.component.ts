import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Todos';
  }

}
