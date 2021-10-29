import { StyleSheet, TextInput } from 'react-native';

import React from 'react';

const Input = props => {
    return <TextInput {...props} style={{ ...styles.Input, ...props.style }} />
}

const styles = StyleSheet.create({
    Input: {
        borderBottomColor: 'black',
        height: 30,
        borderBottomWidth: 1,
        marginVertical: 10
    }
});


export default Input;