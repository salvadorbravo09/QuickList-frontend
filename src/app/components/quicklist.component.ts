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

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(user: User) {
    this.users = [...this.users, { ...user, id: new Date().getTime() }];
  }

  removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id != id);
  }
}
