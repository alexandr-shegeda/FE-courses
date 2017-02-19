export class Gender {

	public static MALE: string = "Male";
	public static FEMALE: string = "Female";
 
	constructor() {
	}

	public static get genders(): any[] {
		return [
		{title: "Male", value: Gender.MALE},
		{title: "Female", value: Gender.FEMALE},
		];
	}

}