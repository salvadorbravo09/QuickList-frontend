import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  user: User;

  @Output()
  newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.newUserEventEmitter.emit(this.user);
      console.log(this.user);
      userForm.reset();
      userForm.resetForm();
    }
  }
}
