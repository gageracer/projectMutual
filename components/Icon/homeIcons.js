import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons';

export function HomeIconsLeft() {
    return (
        <View style={styles.wrapperLeft}>
            <TouchableOpacity style={styles.iconHeat}>
                <AntDesign name="heart" size={32} color="#F196B1" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconMessage}>
                <AntDesign name="message1" size={32} color="blue" />
            </TouchableOpacity>
        </View>
    )
}

export function HomeIconsRight() {
    return (
        <View style={styles.wrapperRight}>
            <TouchableOpacity>
                <AntDesign name="setting" size={38} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperLeft: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 15
    },
    wrapperRight: {
        alignItems: 'center',
        marginLeft: 20,
    },
    iconHeat: {
        marginRight: 10
    },
    iconMessage: {
        marginLeft: 10
    }
})