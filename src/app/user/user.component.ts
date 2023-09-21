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

}
