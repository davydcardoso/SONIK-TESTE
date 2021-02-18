import { Dimensions, StyleSheet } from "react-native";

const css = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: '#00BFFF'
        },
        painel_input_login: {
            backgroundColor: '#FFF',
            width: Dimensions.get('window').width - 20,
            height: Dimensions.get('window').height -250,
            marginTop: 80,
            borderRadius: 40,
            // padding: 20,
            paddingTop:80,
            alignItems: "center"
        },
        container_input_login: {
            borderWidth: 1,
            borderRadius: 20
        },
        text_input_login: {
            paddingTop: 20,
            paddingBottom: 20,
            // paddingLeft: 10
        },
        input_login: {
            padding: 15,
            width: Dimensions.get('window').width -50
        },
        button_login: {
            width: Dimensions.get('window').width -35,
            height: 60,
            backgroundColor: '#00BFFF',
            position: "absolute",
            bottom: 0,
            marginBottom: 70,
            borderRadius: 20,
            alignItems: "center",
            paddingTop: 15
        },
        text_button_login: {
            fontSize: 20,
            color: '#FFF'
        }
    }
)


export default css;