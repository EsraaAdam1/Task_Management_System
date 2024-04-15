import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
//import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      title: "Assignment HCI",
      description: "Task management",
      due_date: "05/15/20024"
    },
    {
      title: "workout",
      description: "gym",
      due_date: "05/17/2024"
    }
  ]
  constructor() { 
    //let storedTasks = localStorage.getItem('tasks');
    //if(storedTasks){
    //  this.tasks = JSON.parse(storedTasks);
    //} else{
    //  this.tasks = [];
    //}
  }

  deleteTask(i: number){
    this.tasks.splice(i,1);
    //this.storeTasks();
  }

  saveTask(title:any, description:any, due_date:any){
    this.tasks.push({
      title,
      description,
      due_date
    })
    //this.storeTasks();
  }

  updateTask(id:any, item:any){
    this.tasks[id] = item;
    //this.storeTasks();
  }

  //storeTasks(){
  //  localStorage.setItem('tasks' , JSON.stringify(this.tasks));
  //}
}
