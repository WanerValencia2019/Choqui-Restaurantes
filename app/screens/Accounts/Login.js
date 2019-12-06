import React, { useState, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import LoginForm from "./../../components/LoginForm";
import Toast from "react-native-easy-toast";
function Login() {
	const ref = useRef();
	return (
		<KeyboardAwareScrollView
			enableOnAndroid={true}
			extraHeight={130}
			extraScrollHeight={130}
		>
			<LoginForm toastRef={ref} />
			<Toast
				position="top"
				opacity={0.9}
				style={{ backgroundColor: "#ED514B" }}
				ref={ref}
			/>
		</KeyboardAwareScrollView>
	);
}

export default Login;

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
