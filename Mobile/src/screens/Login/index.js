import React from 'react';
import {View, Text, Button, Input} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';
export default function Login() {
  return (
    <View style={styles.container}>
      <Header
        title="Sign Up"
        text="Please Registration with email and
              sign up to continue using our app"
      />
    </View>
  );
}
