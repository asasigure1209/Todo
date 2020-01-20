import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { color, text } from '../style/setting'
import { NavigationStackProp } from 'react-navigation-stack';
import { TaskProps } from '../Pages/Home';

export type TodoProps = {
    task: TaskProps,
    completeTask: Function,
    editTask: Function,
    navigation: NavigationStackProp
}

export default function Todo(props: TodoProps) {
    return (
        <TouchableHighlight 
            onPress={()=>  
                props.navigation.navigate(
                    'Description',
                    { 
                        task: props.task,
                        editTask: props.editTask,
                    }
                ) 
            } 
            underlayColor={color.todo.underlay}
        >
            <View style={styles.container}>
                <Text
                    style={styles.text}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                >
                    {props.task.title}
                </Text>
                <View style={styles.imageWrapper}>
                    <TouchableHighlight
                        onPress={() => props.completeTask(props.task.order)}
                        underlayColor={color.todo.background}
                        activeOpacity={0.4}
                    >
                        <Image
                            style={styles.image}
                            source={require('./../assets/check.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: color.todo.background,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: color.todo.border,
        flex: 1
    },
    text: {
        fontWeight: text.fontWeight,
        fontSize: text.fontSize,
        color: color.todo.text,
        textAlignVertical: 'center',
        flex: 1
    },
    imageWrapper: {
        paddingLeft: 8
    },
    image: {
        width: text.fontSize + 10,
        height: text.fontSize + 10,
    }
});
