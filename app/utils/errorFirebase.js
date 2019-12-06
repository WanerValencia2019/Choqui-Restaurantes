export function verificarCodigos(code) {
	const codigo = String(code);
	if (codigo == "auth/email-already-in-use") {
		return "La dirección de correo electrónico ya existe";
	}
	if (codigo == "auth/network-request-failed") {
		return "Error de red, por favor verifica tu conexión";
	}
	if (codigo == "auth/user-disabled") {
		return "Tu cuenta fue bloqueda por el administrador";
	}
	if (codigo == "auth/wrong-password") {
		return "La contraseña es incorrecta";
	}
	if (codigo == "auth/user-not-found") {
		return "El usuario no se encuentra registrado";
	}
	if (codigo == "auth/invalid-email") {
		return "Dirección de correo electrónico no válida";
	}
}
