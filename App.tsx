import React, { useState } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import Header from './components/Header';
import { color } from './style/setting';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
    const [todoNames, setTodos] = useState([
        "机を拭く",
        "洗濯物干し",
        "課題をする"
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
            <View style={styles.statusBar}></View>
            <Header></Header>
            <TodoList todoNames={todoNames} onClick={completeTodo}></TodoList>
            <TodoInput onClick={cleateTodo}></TodoInput>
        </View>
    );
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
