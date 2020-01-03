import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { color, text } from '../style/setting';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationStackProp } from 'react-navigation-stack';
import { TaskProps } from './Home';

type Props = {
    navigation: NavigationStackProp
}

export default function Description(props: Props) {
    const [task, setTask] = useState<TaskProps>(props.navigation.getParam('task'))

    useEffect(() => {
        props.navigation.setParams({
            saveTask: () => {
                props.navigation.getParam('editTask')(task)
                props.navigation.goBack()
            }
        })
    }, [task])

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="やること"
                style={styles.titleInput}
                value={task.title}
                onChangeText={value => setTask({ title: value, description: task.description, order: task.order })}
            />
            <TextInput
                placeholder="詳細"
                multiline
                style={styles.descriptionInput}
                value={task.description}
                onChangeText={value => setTask({ title: task.title, description: value, order: task.order })}
            />
        </View>
    );
}

Description.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                style={styles.button}
                onPress={navigation.getParam('saveTask')}
            >
                <Text style={styles.text}>セーブ</Text>
            </TouchableOpacity>
        ),
        headerStyle: {
            backgroundColor: color.header.background,
        },
        headerTintColor: color.header.text,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    titleInput: {
        fontWeight: text.fontWeight,
        fontSize: text.fontSize,
        color: color.todo.text,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: color.todo.border,
    },
    descriptionInput: {
        fontWeight: text.menu.fontWeight,
        fontSize: text.menu.fontSize,
        padding: 16,
        color: color.todo.text,
    },
    button: {
       marginRight: 16,
    },
    text: {
        color: color.header.text,
        fontSize: text.fontSize,
    }
});
