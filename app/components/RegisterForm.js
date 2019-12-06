import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import {
	validateCorreo,
	camposVacios,
	passwordLenght,
	verificarPasswords
} from "./../utils/validate.js";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";
import { verificarCodigos } from "./../utils/errorFirebase";
function RegisterForm(props) {
	console.log(props.toastRef);
	const { toastRef } = props;
	const { navigation } = props;
	const [passwordVisible, setPasswordVisible] = useState(true);
	const [passwordVisible2, setPasswordVisible2] = useState(true);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [irAmiCuenta, setIrAmiCuenta] = useState(false);

	const register = async () => {
		//devuelve booleano
		const verifiemail = validateCorreo(email);
		const sinTexto = camposVacios(email, password, passwordConfirm);
		const tamañoPassword = passwordLenght(password);
		const coincidenPasswords = verificarPasswords(
			password,
			passwordConfirm
		);
		if (sinTexto) {
			toastRef.current.show("Por favor llena todos los campos");
		} else {
			if (verifiemail) {
				if (coincidenPasswords) {
					if (tamañoPassword) {
						await firebase
							.auth()
							.createUserWithEmailAndPassword(email, password)
							.then((user) => {
								navigation.navigate("Acount");
							})
							.catch((error) => {
								const errorCode = error.code;
								toastRef.current.show(
									verificarCodigos(errorCode)
								);
							});
					} else {
						toastRef.current.show(
							"La contraseña debe tener minimo 8 caracteres"
						);
					}
				} else {
					toastRef.current.show("Las contraseñas no coinciden");
				}
			} else {
				toastRef.current.show(
					"Dirección de correo electrónico no valida"
				);
			}
		}
	};

	return (
		<View>
			<Input
				value={email}
				onChange={(e) => {
					setEmail(e.nativeEvent.text);
				}}
				label="Correo Electrónico"
				placeholder="Correo Electrónico"
				rightIcon={
					<Icon
						type="material-community"
						name="email-outline"
						size={24}
						color="rgba(0,0,0,.5)"
					/>
				}
			/>
			<Input
				value={password}
				onChange={(e) => {
					setPassword(e.nativeEvent.text);
				}}
				password={true}
				secureTextEntry={passwordVisible}
				label="Contraseña"
				placeholder="Contraseña"
				rightIcon={
					<Icon
						type="material-community"
						name={
							passwordVisible ? "eye-outline" : "eye-off-outline"
						}
						size={24}
						color="rgba(0,0,0,.5)"
						onPress={() =>
							passwordVisible
								? setPasswordVisible(false)
								: setPasswordVisible(true)
						}
					/>
				}
			/>
			<Input
				value={passwordConfirm}
				onChange={(e) => {
					setPasswordConfirm(e.nativeEvent.text);
				}}
				password={true}
				secureTextEntry={passwordVisible2}
				label="Confirmar Contraseña"
				placeholder="Confirmar Contraseña"
				rightIcon={
					<Icon
						type="material-community"
						name={
							passwordVisible2 ? "eye-outline" : "eye-off-outline"
						}
						size={24}
						color="rgba(0,0,0,.5)"
						onPress={() =>
							passwordVisible2
								? setPasswordVisible2(false)
								: setPasswordVisible2(true)
						}
					/>
				}
			/>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Button
					title="Registrarse"
					containerStyle={{
						width: "50%",
						marginTop: 10
					}}
					buttonStyle={{ backgroundColor: "#00a680" }}
					onPress={register}
				/>
			</View>
		</View>
	);
}

export default withNavigation(RegisterForm);
