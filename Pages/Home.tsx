import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage } from 'react-native';
import TodoList from '../Organisms/TodoList';
import TodoInput from '../Molecules/TodoInput';
import { color } from '../style/setting';
import { NavigationStackProp } from 'react-navigation-stack';
import axios from 'axios'

type Props = {
    navigation: NavigationStackProp
}

export type WebApiTaskProps = {
    id: number,
    order: number,
    title: string,
    description: string,
    created_at: string,
    update_at: string,
}

export default function Home(props: Props) {
    const [tasks, setTasks] = useState<WebApiTaskProps[]>([])
    useEffect (() => {
        // WebApiからの取得
        axios.get('https://asasigure-todo.herokuapp.com/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
    },[])

    const completeTask = (deleteId: number) => {
        //WebApiでのタスク削除
        axios.delete('https://asasigure-todo.herokuapp.com/api/tasks/' + deleteId.toString())
            .then(response => setTasks(response.data))
    }

    const cleateTask = (title: string) => {
        //WebApiでのタスク作成
        axios.post('https://asasigure-todo.herokuapp.com/api/tasks', {
            title,
            description: "",
        }).then(response => setTasks(tasks.concat(response.data)))
    }

    const editTask = (newTask: WebApiTaskProps) => {
        try {
            AsyncStorage.mergeItem(newTask.id.toString(), JSON.stringify(newTask))
        } catch(error) {
            console.log(error)
        }

        //WebApiでのタスク更新
        axios.put('https://asasigure-todo.herokuapp.com/api/tasks/' + newTask.id.toString(), {
            title: newTask.title,
            description: newTask.description,
        }).then(response => {
            const newTasks = tasks.map((preTask) => {
                if (preTask.id === response.data.id) {
                    return response.data
                }
    
                return preTask
            })
    
            setTasks(newTasks)
        })
    }

    return (
        <View style={styles.container}>
            <TodoList tasks={tasks} completeTask={completeTask} editTask={editTask} navigation={props.navigation}></TodoList>
            <TodoInput onClick={cleateTask}></TodoInput>
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
