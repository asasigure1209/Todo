import React, { useState } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import TodoList from '../Organisms/TodoList';
import TodoInput from '../Molecules/TodoInput';
import { color } from '../style/setting';

export default function Home() {
    const [todoNames, setTodos] = useState([
        "机を拭く",
        "洗濯物干し",
        "課題をする",
    ])

    const completeTodo = (deleteIndex: number) => {
        setTodos(todoNames.filter((_todo, index) => index !== deleteIndex))
    }

    const cleateTodo = (title: string) => {
    if (title !== "")
        setTodos(todoNames.concat(title))
    }

    return (
        <View style={styles.container}>
            <TodoList todoNames={todoNames} onClick={completeTodo}></TodoList>
            <TodoInput onClick={cleateTodo}></TodoInput>
        </View>
    );
}

Home.navigationOptions = {
    title: 'やることリスト',
    headerStyle: {
        backgroundColor: color.header.background,
    },
    headerTintColor: color.header.text,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    statusBar: {
        height: StatusBar.currentHeight,
        color: '#FFFFFF'
    }
});
