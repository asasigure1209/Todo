import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Todo, { TodoProps } from './Todo'

type TodoListProps = {
    todoNames: string[],
    onClick: Function
}

export default function TodoList(props: TodoListProps) {
    const todoList = props.todoNames.map((todoName, index) => 
        <Todo onClick={props.onClick} title={todoName} index={index} key={index}></Todo>
    )

    return (
        <ScrollView>
            {todoList}
        </ScrollView>
    );
}