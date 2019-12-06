import React, { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, Image, Platform } from "react-native";
import RegisterForm from "./../../components/RegisterForm";
import Toast from "react-native-easy-toast";

function Register() {
	const ref = useRef();
	return (
		<KeyboardAwareScrollView
			style={{ marginRight: 20, marginLeft: 20 }}
			enableOnAndroid={true}
			extraHeight={130}
			extraScrollHeight={130}
		>
			<View style={{ marginTop: -4, flex: 1, alignItems: "center" }}>
				<Image source={require("./../../../assets/images/logo.png")} />
			</View>
			<View>
				<RegisterForm toastRef={ref}></RegisterForm>
			</View>
			<Toast
				position="top"
				opacity={0.9}
				style={{ backgroundColor: "#ED514B" }}
				ref={ref}
			/>
		</KeyboardAwareScrollView>
	);
}
export default Register;
