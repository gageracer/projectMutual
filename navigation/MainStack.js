import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen'
import { Ionicons } from '@expo/vector-icons';
import {HomeIconsLeft, HomeIconsRight} from '../components/Icon/homeIcons'


const Stack = createStackNavigator()

export function Mainstack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Root" 
            component={Home}
            options={{
                title: 'My home',
                headerLeft:() => <HomeIconsRight />,
                headerRight: () => <HomeIconsLeft />,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            />
        </Stack.Navigator>
    )
}


