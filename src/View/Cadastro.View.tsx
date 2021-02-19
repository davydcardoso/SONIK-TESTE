import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import UsuarioModel from '../Models/Usuario.Model';
import css from './Style/Global.Style';
import { RectButton } from 'react-native-gesture-handler';

export default function cadastroi_view() {

    const route = useRoute();
    const usuario_logado = route.params as UsuarioModel;

    return (
        <View style={css.container} >
            <View style={css.cad_container_header} >
                
            </View>
            <ScrollView style={css.scroll_container} >
                
                <View style={css.cad_container_inputs} >
                    <TextInput
                        style={css.cad_input_id}
                        editable={false}
                    />
                   <TextInput
                        style={css.cad_input_date}
                        editable={false}
                    />
                </View>

                <Text style={css.cad_text} >Nome Aluno</Text>
                <TextInput 
                    style={css.cad_inputs}
                />

                <Text style={css.cad_text} >Nome Mãe</Text>
                <TextInput 
                    style={css.cad_inputs}
                />

                <Text style={css.cad_text} >Nome Pai</Text>
                <TextInput 
                    style={css.cad_inputs}
                />

                <Text style={css.cad_text} >Cpf</Text>
                <TextInput 
                    style={css.cad_inputs}
                />

                <Text style={css.cad_text} >Endereço</Text>
                <TextInput 
                    style={css.cad_inputs}
                />

                <RectButton style={css.cad_button_cadastrar} >
                    <Text style={
                        {
                            fontSize: 20,
                            color: '#FFF'
                        }
                    } >Cadastrar Aluno</Text>
                </RectButton>

            </ScrollView>
        </View>
    )
}