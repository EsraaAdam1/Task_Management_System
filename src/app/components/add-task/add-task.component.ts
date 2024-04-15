import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
//import { title } from 'process';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksService: TasksService , private router: Router,private title: Title) {
    this.title.setTitle('Add Task');
   }

  ngOnInit(): void { 
  }

  saveTask(title:any, description:any , due_date:any){
    this.tasksService.saveTask(title.value, description.value, due_date.value);
    this.router.navigate(['/']);
  }
}
