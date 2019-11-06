import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color, text } from '../style/setting'

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>やることリスト</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: color.header.background,
    justifyContent: 'center',
  },
  text: {
      fontWeight: text.header.fontWeight,
      fontSize: text.header.fontSize,
      color: color.header.text
  }
});
