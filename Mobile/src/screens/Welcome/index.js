import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome </Text>
        <Text style={styles.headerText}>
          Please Login or sign up to continue using our app
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={require('../../../img/Logo.jpg')} />

        <Text style={[styles.bodyText, {color: '#383FDB', marginTop: -70}]}>
          Register With Facebook
        </Text>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={{color: '#FFF', fontSize: 25}}> Facebook </Text>
        </TouchableOpacity>
        <Text style={[styles.bodyText, {color: '#383FDB', marginTop: 30}]}>
          Or Register with email
        </Text>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.headerText}> You already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.registerButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
