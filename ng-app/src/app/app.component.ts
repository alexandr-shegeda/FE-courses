import { Component } from '@angular/core';
import { UserListService } from './services/user-list.service';
import { Gender } from './models/gender';
import { UserRole } from './models/user-role';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];

  title = 'app works!';

  constructor(private userListService: UserListService) {
  	
  }

  ngOnInit() {
  	this.users = this.userListService.getUsers();
  }

}