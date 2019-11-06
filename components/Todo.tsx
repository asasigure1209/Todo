import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { color, text } from './../style/setting'

export type Todo = {
    title: string
}

const onPress = () => {
    console.log("press")
}

export default function Todo(props: Todo) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={color.todo.underlay}>
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Image style={styles.image} source={require('./../assets/check.png')} />
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: color.todo.background,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.todo.border
  },
  text: {
      fontWeight: text.fontWeight,
      fontSize: text.fontSize,
      color: color.todo.text,
  },
  image: {
      width: 24,
      height: 24
  }
});
