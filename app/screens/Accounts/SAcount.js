import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import Loading from "./../../components/loading";
import UserGuest from "./userGuest"
import UserLogged from "./userLogged"

function SAcount() {
  const [Login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  if (Login === null) {
    return <Loading isVisible={true} text='Cargando...' />;
  }
  return Login ? <UserLogged />:<UserGuest />
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SAcount;
