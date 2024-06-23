import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required : true }) isSelected!: boolean;
  @Output() userSelected = new EventEmitter<string>();     

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }


  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }

}
