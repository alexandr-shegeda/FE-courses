import {Injectable} from '@angular/core';
import {User} from '../models/user';

@Injectable()
export class UserListService {
	users: User[] = [];
	private _id: number = 0;

	constructor() {}

	getUsers(): User[] {
		return this.users;
	}

	addUser({name,
		age,
		role,
		gender}): void {
		let user = new User(this._id++, 
			name,
			age,
			role,
			gender);

		this.users.push(user);
	}
}
