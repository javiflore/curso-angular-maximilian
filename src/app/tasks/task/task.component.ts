import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Task {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;

}
