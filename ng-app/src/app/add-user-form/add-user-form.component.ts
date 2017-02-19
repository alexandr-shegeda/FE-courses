import { Component, OnInit } from '@angular/core';
import { UserListService } from '../services/user-list.service';
import { UserRole } from '../models/user-role';
import { Gender } from '../models/gender';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

	genders = Gender.genders;
	roles =  UserRole.roles;

	user = {
		name: "",
		age: "",
		gender: this.genders[0],
		role: this.roles[0]
	}


  constructor(public userListService : UserListService) {
  console.log(this.roles);
  console.log(this.genders);
}


  addUser() {
  	this.userListService.addUser(this.user);
  }

  ngOnInit() {
  }

}
