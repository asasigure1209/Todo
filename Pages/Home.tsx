import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage } from 'react-native';
import TodoList from '../Organisms/TodoList';
import TodoInput from '../Molecules/TodoInput';
import { color } from '../style/setting';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
    navigation: NavigationStackProp
}

export type TaskProps = {
    order: number,
    title: string,
    description: string,
}

export default function Home(props: Props) {
    const [tasks, setTasks] = useState<TaskProps[]>([])
    useEffect (() => {
        async function getLocalData() {
            let items: [string, string][];
            try {
                const allKeys = await AsyncStorage.getAllKeys()
                items = await AsyncStorage.multiGet(allKeys)
            } catch(error) {
                console.log(error)
            }

            let localTask: TaskProps[];
            if (items !== undefined) {
                localTask = items.map((item) => {
                    return JSON.parse(item[1])
                })
            }
            setTasks(localTask)
        }

        getLocalData()
    },[])

    const completeTask = (deleteOrder: number) => {
        try {
            AsyncStorage.removeItem(deleteOrder.toString())
        } catch(error) {
            console.log(error)
        }

        setTasks(tasks.filter((todo) => todo.order !== deleteOrder))
    }

    const cleateTask = (title: string) => {
        if (title !== "") {
            let order = 0;

            if (tasks.length > 0) {
                //降順にソート
                const sortedTasks = tasks.sort((a, b) => {
                    let comparison = 0;
            
                    if (a.order > b.order) {
                        comparison = -1;
                    } else if (b.order > a.order) {
                        comparison = 1;
                    }
            
                    return comparison;
                })   

                order = sortedTasks[0].order + 1
            }

            const newTask: TaskProps = {
                order,
                title,
                description: "",
            }

            try {
                AsyncStorage.setItem(tasks.length.toString(), JSON.stringify(newTask))
            } catch (error) {
                console.log(error)
            }

            setTasks(tasks.concat(newTask))
        }
    }

    const editTask = (newTask: TaskProps) => {
        try {
            AsyncStorage.mergeItem(newTask.order.toString(), JSON.stringify(newTask))
        } catch(error) {
            console.log(error)
        }

        const newTasks = tasks.map((preTask) => {
            if (preTask.order === newTask.order) {
                return newTask
            }

            return preTask
        })

        setTasks(newTasks)
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
