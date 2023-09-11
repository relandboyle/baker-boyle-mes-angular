import { Component } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from 'src/constants/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  selectedUser!: User;
  userList!: User[];

  constructor(
    private userService: UserService
  ) { }

  getUser(userId: string): void {
    this.userService.getUser(userId).subscribe({
      next: user => this.selectedUser = user,
      error: err => console.error(err),
      complete: () => console.log(`Found User ${userId}!`)
    });
  }

  createUser(): void {
    const user: User = {
      userId: '5',
      firstName: 'Dave',
      lastName: 'Staehle',
    }

    this.userService.createUser(user).subscribe({
      next: user => this.selectedUser = user,
      error: err => console.error(err),
      complete: () => {
        console.log(`Created User ${user.userId}!`)
      }
    });
  }
}
