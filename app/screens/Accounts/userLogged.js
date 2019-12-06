import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";

function UserLogged() {
	return (
		<View>
			<Text>Usuario Logueado</Text>

			<Button
				title="Cerrar Sesión"
				onPress={() => {
					firebase
						.auth()
						.signOut()
						.then(() => {
							console.log("sesión cerrada");
						});
				}}
			/>
		</View>
	);
}

export default UserLogged;
