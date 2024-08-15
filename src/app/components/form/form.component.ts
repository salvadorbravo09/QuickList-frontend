import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { NgClass } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input()
  user: User = new User();

  @Output()
  newUserEventEmitter: EventEmitter<User> = new EventEmitter();

  private id!: number;

  constructor(private service: UserService, private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.id = +params['id'];
      if (this.id) {
        this.service.findById(this.id).subscribe((user) => {
          this.user = user;
        });
      }
    });
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
