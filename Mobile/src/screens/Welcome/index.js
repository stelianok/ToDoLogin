/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
export default function Welcome() {
  return (
    <View style={styles.container}>
      <Header
        title="Welcome"
        text="Please Login or sign up to continue using our app"
      />
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
