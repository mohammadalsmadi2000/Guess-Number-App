import { StyleSheet, Text, View } from 'react-native';

import Color from '../Constant/Color';
import React from 'react';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitles}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    }
})

export default Header;