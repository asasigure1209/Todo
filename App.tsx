import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from './components/Header';
import { color } from './style/setting';
import Todo from './components/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} hidden={false}></StatusBar>
      {/* statusBarにかぶせる */}
      <View style={styles.statusBar}></View>
      <Header></Header>
      <Todo title="テストの問題を解く"></Todo>
      <Todo title="片付け"></Todo>
      <Todo title="食器を洗う"></Todo>
      <Todo title="ご飯を作る"></Todo>
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
