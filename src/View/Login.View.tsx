import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native'

import css from './Style/Global.Style';
import not_status_bar from './Style/NoStatusBar';

export default function ViewLogin() {

    const [user_login, set_user_login] = useState();
    const [pass_login, set_pass_login] = useState();
    const navigation = useNavigation();


    function logar_sistema() {
        if ( user_login != 'admin' ) {
            alert('Usuario incorreto');
        }else {
            if ( pass_login != '123') {
                alert('Senha incorreta');
            }else {
                navigation.navigate('CADASTRO_VIEW',
                    {
                        id: 1,
                        nome: 'Davyd Kewen',
                        token: '6622142587255',
                        acesso: 'DESENVOLVEDOR'
                    }
                )
            }
        }

    }

    return (
        <View style={css.container}>
            {/* {not_status_bar} */}
            <View style={css.painel_input_login}>

                <Text style={css.text_input_login}>Login</Text>
                <View style={css.container_input_login}>
                    <TextInput 
                        style={css.input_login}
                        value={user_login}
                        onChangeText={set_user_login}
                        placeholder="Insert your login"
                        autoCapitalize='none'
                    />
                </View>

                <Text style={css.text_input_login} >Senha</Text>
                <View style={css.container_input_login}>
                    <TextInput 
                        style={css.input_login}
                        value={pass_login}
                        onChangeText={set_pass_login}
                        secureTextEntry={true}
                        placeholder='Insert your password'
                        autoCapitalize='none'
                    />
                </View>

                <RectButton style={css.button_login} onPress={logar_sistema}>
                    <Text style={css.text_button_login}> Acessar </Text>
                </RectButton>

            </View>
        </View>
    )
}