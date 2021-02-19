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
        },

        //Folha de estilo Form Cadastros
        cad_container_header: {
            width: Dimensions.get('window').width,
            // position: 'absolute',
            // top: 0,
            height: 80,
            backgroundColor: '#FFF',
            marginBottom: 6,
        },
        scroll_container: {
            width: Dimensions.get('window').width -5,
            backgroundColor: '#fff',
            marginHorizontal: 20,
            paddingHorizontal: 7,
        },
        cad_container_inputs: {
            flexDirection: 'row',
            marginHorizontal: 5,
            width: Dimensions.get('window').width -30,
        },
        cad_input_id: {
            width: 100,
            height: 50,
            marginVertical: 5,
            marginHorizontal: 2,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#D3D3D3',
            backgroundColor: '#DCDCDC',
            padding: 4,
        },
        cad_input_date: {
            width: 250,
            height: 50,
            marginVertical: 5,
            marginHorizontal: 2,
            borderWidth: 0.5,
            borderRadius: 10,
            borderColor: '#D3D3D3',
            backgroundColor: '#DCDCDC',
            padding: 4,
        },
        cad_text:{
            marginTop: 8,
            marginLeft: 5,
        },
        cad_inputs: {
            width: Dimensions.get('window').width -20,
            height: 50,
            marginVertical: 5,
            marginHorizontal: 2,
            borderWidth: 0.5,
            padding: 4,
            borderRadius: 10,
        },
        cad_button_cadastrar: {
            width: Dimensions.get('window').width -20,
            height: 50,
            backgroundColor: '#00BFFF',
            alignItems: 'center',
            paddingTop: 10,
            marginTop: 30,
        }

    }
)


export default css;