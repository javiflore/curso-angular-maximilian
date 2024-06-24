import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shares/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgFor, NgIf, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompleteTask(){
    this.completed.emit(this.task.id);
  }


}
