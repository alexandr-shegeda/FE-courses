import { UserRole } from './user-role';
import { Gender } from './gender';

export class User {

	constructor(public id: number,
		public name: string,
		public age: number,
		public role: UserRole,
		public gender: Gender) {
	}

}