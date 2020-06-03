import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

//import Logo from '../../img';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome </Text>
        <Text style={styles.headerText}>Please Login or sign up to continue using our app </Text>
      </View>
      
    </View>
  );
}
