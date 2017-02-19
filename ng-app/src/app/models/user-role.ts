export class UserRole {

	public static ADMIN: string = "Admin";
	public static PUBLISHER: string = "Publisher";
	public static ADOPS: string = "AdOps";

	constructor() {
	}

	public static get roles(): string[] {
		return ["Admin", "Publisher", "AdOps"];
	}
}