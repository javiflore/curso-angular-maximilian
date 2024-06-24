export interface Task {
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  completed: boolean;
}

export interface NewTask{
  title: string,
  summary: string, 
  dueDate: string
}