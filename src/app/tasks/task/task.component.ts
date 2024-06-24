import { Component, Input, inject } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shares/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, NgIf, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }


}
