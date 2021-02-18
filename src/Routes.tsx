import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import loginView from './View/Login.View';
import cadastroView from './View/Cadastro.View';

export default function Route(){
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="LOGIN_VIEW"
                    component={loginView}
                /> 
                <Screen
                    name="CADASTRO_VIEW"
                    component={cadastroView}
                />
            </Navigator>
        </NavigationContainer>
    );
}