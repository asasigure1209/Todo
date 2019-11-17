import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([
        {
            title: "テストの問題を解くテストの問題を解くテストの問題を解く"
        },
        {
            title: "片付け"
        },
        {
            title: "食器を洗う"
        }
    ])

    const completeTodo = (deleteIndex: number) => {
        setTodos(todos.filter((_todo, index) => index !== deleteIndex))
    }

    const todoList = todos.map((todo, index) => 
        <Todo onClick={completeTodo} title={todo.title} index={index} key={index}></Todo>
    )

    return (
        <ScrollView>
            {todoList}
        </ScrollView>
    );
}