import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title} </Text>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 25,
    marginVertical: 50,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: '#383FDB',
    fontWeight: 'bold',
    fontSize: 32,

    paddingBottom: 20,
  },
  headerText: {
    color: '#604A65',
    fontSize: 18,
  },
});
