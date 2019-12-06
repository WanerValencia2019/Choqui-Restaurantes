import React from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="#FFFFFF"
      overlayBackgroundColor="transparent"
      width={200}
      height={100}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00a680" />
        <Text style={{ color: "#00a680", fontSize: 20 }}>{text}</Text>
      </View>
    </Overlay>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Loading;
