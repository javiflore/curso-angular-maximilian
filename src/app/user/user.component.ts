import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  /*
    SIGNALS: notify angular when a value changes 
    or the UI needs to be updated.
  */
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  /*
    this is the manner to use a computed value with signals
    Angular sets up a subscription to the signal and updates
    the value whenever the signal changes, and only then angular
    recompute the imgPath value.
  */
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(){ // as it has the key word GET, we use it in the html like a property.
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);

  }

}
