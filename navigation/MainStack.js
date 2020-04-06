import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen'

const Stack = createStackNavigator()

export function Mainstack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Root" component={Home} />
        </Stack.Navigator>
    )
}


