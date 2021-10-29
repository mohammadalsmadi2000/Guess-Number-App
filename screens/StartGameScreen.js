import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import Color from '../Constant/Color';
import Input from '../components/Input';
import React,{useState} from 'react';

const StartGameScreen = (props) => {
    const [entred,setEntred]=useState('');

    const inputChange=(value)=>{
        setEntred(value);
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title} >StartGameScreen</Text>
            <Card style={styles.inputContainer}>
                <Text>select Number</Text>
                <Input blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} style={styles.input} onChangeText={val=>inputChange(val)} />
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color={Color.primary} />
                    <Button title='Confirm' color={Color.accent} />
                    <Text>{entred}</Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }, title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, button: {
        width: 100

    }, Input: {
        width: 50,
        textAlign: 'center'
    }


});

export default StartGameScreen;