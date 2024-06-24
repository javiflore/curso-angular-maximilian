import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgFor, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined; // the same as above

  @Input({ required: true }) id!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService){}


  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseModal(){
    this.isAddingTask = false;
  }

  
  onAddTask(taskData: NewTask){

    this.isAddingTask = false;
  }

}
