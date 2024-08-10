import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-quicklist',
  standalone: true,
  imports: [ListComponent],
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
