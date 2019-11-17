import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Image } from 'react-native';
import Header from './components/Header';
import { color } from './style/setting';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <Header></Header>
      <TodoList></TodoList>
      <TodoInput></TodoInput>
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
