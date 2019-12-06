export function validateCorreo(email) {
	const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	return regex.test(new String(email).toLowerCase());
}

export function passwordLenght(password) {
	if (String(password).length >= 8) {
		return true;
	} else {
		return false;
	}
}

export function verificarPasswords(password, passwordConfirm) {
	if (password === passwordConfirm) {
		return true;
	} else {
		return false;
	}
}
export function camposVacios(email, password, passwordConfirm) {
	if (
		String(email) == "" ||
		String(password) == "" ||
		String(passwordConfirm) == ""
	) {
		return true;
	} else {
		return false;
	}
}
