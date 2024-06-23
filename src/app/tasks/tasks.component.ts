import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';

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

  @Input({ required: true }) id?: string | undefined;
  isAddingTask = false;


  tasks = [
    { 
      id: 't1', 
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn Angular to build web applications.',
      dueDate: '2021-12-31',
      completed: false
    },
    { 
      id: 't2',  
      userId: 'u2',
      title: 'AI and ML',
      summary: 'Learn AI and ML to build intelligent applications.',
      dueDate: '2021-12-31',
      completed: false
    },{ 
      id: 't3',  
      userId: 'u3',
      title: 'Software Engineering',
      summary: 'Learn software engineering to build scalable applications.',
      dueDate: '2021-12-31',
      completed: false
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.id);
  }

  onCompleteTask(taskId: string){
    /**
     * filter: creates a new array with tasks that dont have been completed
     */
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelModal(){
    this.isAddingTask = false;
  }

}
