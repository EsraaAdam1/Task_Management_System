import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(public tasksService: TasksService, private title: Title) {
    this.title.setTitle('Home');
   }

  ngOnInit(): void {
  }

  deleteTask(i: number){
    this.tasksService.deleteTask(i);
  }

}
