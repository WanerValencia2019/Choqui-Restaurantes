import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	TouchableOpacity
} from "react-native";
import { Input, Icon, Button, Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";
import { verificarCodigos } from "./../utils/errorFirebase";
import Loading from "./loading";
import { validateCorreo } from "./../utils/validate.js";

function LoginForm(props) {
	const { toastRef } = props;
	const { navigation } = props;
	const [isVisible, setIsVisible] = useState(false);

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const login = async () => {
		setIsVisible(true);
		console.log(" " + email + "  " + password);
		if (!email || !password) {
			console.log("llenar los campos");
		} else {
			await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user) => {
					console.log("sesion iniciada");

					navigation.navigate("Acount");
				})
				.catch((error) => {
					const codeError = error.code;
					console.log(error.code);
					toastRef.current.show(verificarCodigos(codeError));
				});
		}
		setIsVisible(false);
	};

	return (
		<View style={{ marginRight: 20, marginLeft: 20 }}>
			<Loading isVisible={isVisible} text="Iniciando Sesión" />
			<View style={styles.containerImg}>
				<Image source={require("./../../assets/images/logo.png")} />
			</View>

			<Input
				value={email}
				onChange={(e) => {
					setEmail(e.nativeEvent.text);
				}}
				label="Correo Electrónico"
				placeholder="Correo Electrónico"
				leftIcon={
					<Icon
						name="email"
						size={24}
						type="material-community"
						color="rgba(0,0 , 0,.4 )"
					/>
				}
			/>

			<Input
				value={password}
				onChange={(e) => {
					setPassword(e.nativeEvent.text);
				}}
				password={true}
				secureTextEntry={true}
				label="Contraseña"
				placeholder="Contraseña"
				leftIcon={
					<Icon
						name="lock-question"
						size={24}
						type="material-community"
						color="rgba(0,0 , 0,.4 )"
					/>
				}
			/>
			<View style={styles.ViewBtn}>
				<Button
					buttonStyle={styles.btnStyle}
					containerStyle={styles.containerBtn}
					titleStyle={styles.Title}
					title="Iniciar Sesión"
					type="outline"
					onPress={login}
				/>
			</View>
			<Divider />
			<View style={styles.containerOpt}>
				<Button
					title="Iniciar sesión con Facebook"
					icon={
						<Icon
							name="facebook"
							size={28}
							type="material-community"
							color="#ffffff"
						/>
					}
				/>
				<View style={styles.Register}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
						style={{ padding: 5, fontSize: 14 }}
					>
						<Text>
							¿No tienes una cuenta?{" "}
							<Text style={{ color: "#00a680" }}>Regístrate</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
	Register: {
		textAlign: "center"
	},
	containerOpt: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		padding: 10
	},
	Title: {
		color: "rgba(255,255,255,1)"
	},
	containerBtn: {
		width: "60%",
		marginTop: 10,
		marginBottom: 5,
		backgroundColor: "#00a680",
		borderColor: "#00a680"
	},
	btnStyle: {
		borderColor: "#00a680"
	},
	ViewBtn: {
		flex: 1,
		alignItems: "center"
	},
	containerImg: {
		marginTop: -4,
		flex: 1,
		alignItems: "center"
	}
});
