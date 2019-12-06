import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

function UserGuest(props) {
    const { navigation } = props;
    return (
        <ScrollView contentContainerStyle={styles.ScrollView}>
            <Image
                source={require("./../../../assets/images/user-guest.jpg")}
                style={styles.image}
                resizeMode="contain"
                resizeMethod="resize"
            />
            <Text style={styles.title}>
                Consulta tu perfil de Choqui- Restaurantes
            </Text>
            <Text style={styles.description}>
                La plataforma movil donde podras encontrar los mejores
                restaurantes del Chocó, valorarlos e incluso puedes incluir tu
                restaurante a nuestro catalogo
            </Text>
            <View style={styles.viewBtn}>
                <Button
                    type="solid"
                    title="Ver perfil"
                    raised={true}
                    titleStyle={styles.btnTitle}
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.contentBtn}
                    onPress={() => navigation.navigate("Login")}
                />
            </View>
        </ScrollView>
    );
}
export default withNavigation(UserGuest);
const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        marginBottom: 10,
        width: "80%",
        height: 280,
        borderColor: "#3cb371",
        borderWidth: 5
    },
    ScrollView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 17
    },
    description: {
        textAlign: "center",
        fontSize: 15.5,
        color: "rgba(0,0,0,.5)",
        backgroundColor: "rgba(255,255,255,.4)",
        marginBottom: 10
    },
    viewBtn: {
        flex: 3,
        alignItems: "center",
        width: "100%"
    },
    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnTitle: {
        fontSize: 18
    },
    contentBtn: {
        width: 120,
        width: "70%"
    }
});
