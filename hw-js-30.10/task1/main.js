let email = prompt("Please, enter your email:", "");

validateEmail(email);

function validateEmail(email) {
	let errorMessage;
	if(email === ""){
		errorMessage = "Email should not be empty";
	} else {
		let firstPart = email.split("@")[0];
		let secondPart = email.split("@")[1];

		let emailAddress = firstPart;
		let dotIndex = secondPart.lastIndexOf(".");
		let domain = secondPart.substring(0, dotIndex);
		let zone = secondPart.substring(dotIndex + 1);

		console.log(emailAddress, domain, zone);

		if(emailAddress.length <= 4) {
			errorMessage = 'Email address before \'@\' must be more than 4 symbols';
		} else if (domain.length <= 1 || domain.length > 10) {
			errorMessage = 'Email address domain length must be between 1 and 10 symbols';
		} else if(zone.length < 2 || zone.length > 5) {
			errorMessage = 'Email address zone must be between 2 and 5 symbols';
		}
	}

	if(errorMessage != null) {
		alert(errorMessage);
		console.error(errorMessage);
	} else {
		alert("Email is correct");
	}
	
}