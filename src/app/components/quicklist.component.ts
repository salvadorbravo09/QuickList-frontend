import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-quicklist',
  standalone: true,
  imports: [ListComponent, FormComponent],
  templateUrl: './quicklist.component.html',
})
export class QuicklistComponent implements OnInit {
  title: string = 'Listado de Usuarios';
  users: User[] = [];
  userSelected: User;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(user: User) {
    if (user.id > 0) {
      this.service.update(user).subscribe((userUpdated) => {
        this.users = this.users.map((u) =>
          u.id == userUpdated.id ? { ...userUpdated } : u
        );
      });
    } else {
      this.service.create(user).subscribe((userCreated) => {
        this.users = [...this.users, { ...userCreated }];
      });
    }
    this.userSelected = new User();
  }

  removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id != id);
  }

  setSelectedUser(user: User): void {
    this.userSelected = { ...user };
  }
}
