import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-quicklist',
  standalone: true,
  imports: [],
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
}
