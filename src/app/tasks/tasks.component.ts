import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  /**
   * the question mark makes the property OPTIONAL.
   * If the property is not provided, it will be UNDEFINED.
  */
  @Input() name?: string;

  // @Input() name: string | undefined; // the same as above

}
