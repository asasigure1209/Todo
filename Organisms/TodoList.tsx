import React from 'react';
import { ScrollView } from 'react-native';
import Todo from '../Molecules/Todo'
import { NavigationStackProp } from 'react-navigation-stack';
import { TaskProps } from '../Pages/Home';

type TodoListProps = {
    tasks: TaskProps[],
    completeTask: Function,
    editTask: Function,
    navigation: NavigationStackProp
}

export default function TodoList(props: TodoListProps) {
    const tasks = props.tasks.sort((a, b) => {
        let comparison = 0;

        if (a.order > b.order) {
            comparison = 1;
        } else if (b.order > a.order) {
            comparison = -1;
        }

        return comparison;
    })

    const todoList = tasks.map((task) => 
        <Todo completeTask={props.completeTask} editTask={props.editTask} navigation={props.navigation} task={task} key={task.order}></Todo>
    )

    return (
        <ScrollView>
            {todoList}
        </ScrollView>
    );
}