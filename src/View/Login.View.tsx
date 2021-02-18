import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import css from './Style/Global.Style';
import not_status_bar from './Style/NoStatusBar';

export default function ViewLogin() {

    function logar_sistema() {
        alert('Logado com sucesso')
    }

    return (
        <View style={css.container}>
            {/* {not_status_bar} */}
            <View style={css.painel_input_login}>
                <Text style={css.text_input_login}>Login</Text>
                <View style={css.container_input_login}>
                    <TextInput style={css.input_login}

                    />
                </View>
                <Text style={css.text_input_login} >Senha</Text>
                <View style={css.container_input_login}>
                    <TextInput style={css.input_login}

                    />
                </View>

                <RectButton style={css.button_login} onPress={logar_sistema}>
                    <Text style={css.text_button_login}> Acessar </Text>
                </RectButton>

            </View>
        </View>
    )
}