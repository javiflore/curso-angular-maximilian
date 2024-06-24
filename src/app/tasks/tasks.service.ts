import { Injectable } from "@angular/core";
import { type NewTask } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks = [
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

    getUserTasks(userId: string){
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTask, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate,
            completed: false
          });
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
    
    

}