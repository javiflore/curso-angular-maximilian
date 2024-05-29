import { Component, Input, computed, input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  /** 
   * input() decorator is used to define input properties with SIGNALS
   * using input() angular knows thas avatar and name are inputs property
   * and a signal.
   * 
   * In this case, we CAN'T use .set() to change the signal, 
   * because it's a read only signal.
   */
  
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });


  onSelectUser() {
  }

}
