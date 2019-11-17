import React, { useState } from 'react';
import { StyleSheet, Image, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { color, text } from './../style/setting'

export default function TodoInput() {
    const [text, setText] = useState("")

    return (
        <KeyboardAvoidingView behavior={'position'}>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder="新しいやること"
                    onChangeText={(text) => {setText(text)}}
                    value={text}
                />
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={require('./../assets/add.png')} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: color.todoInput.background,
        elevation: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        fontWeight: text.fontWeight,
        fontSize: text.fontSize,
        color: color.todo.text,
        borderWidth: 1,
        borderColor: color.todoInput.formBoder,
        backgroundColor: color.todoInput.formBackgound,
        borderRadius: text.fontSize + 12,
        paddingVertical: 6,
        paddingLeft: 12,
        paddingRight: 12,
        right: 0,
        flex: 1
    },
    imageWrapper: {
        paddingLeft: 16
    },
    image: {
        width: 24,
        height: 24
    }
});
