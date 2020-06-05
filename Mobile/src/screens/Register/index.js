/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Feather';
export default function Register() {
  const windowsWidth = useWindowDimensions().width;
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);


  function SetPasswordVisibility() {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else if (!isPasswordVisible) {
      setIsPasswordVisible(true);
    }
  }
  function SetConfirmPasswordVisibility() {
    if (isConfirmPasswordVisible) {
      setIsConfirmPasswordVisible(false);
    } else if (!isConfirmPasswordVisible) {
      setIsConfirmPasswordVisible(true);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header
          title="Sign up"
          text="Please Registration with email and sign up to continue  using our app"
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}> Register with email </Text>
          <View>
            <Icon
              name={'user'}
              size={28}
              color={'blue'}
              style={[styles.inputIcon]}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.textInput, {width: windowsWidth - 55}]}
              placeholder="first name"
              placeholderTextColor={'gray'}
            />
          </View>
          <View>
            <Icon
              name={'user'}
              size={28}
              color={'blue'}
              style={[styles.inputIcon]}
              underlineColorAndroid="transparent"
            />

            <TextInput
              style={[styles.textInput, {width: windowsWidth - 55}]}
              placeholder="last name"
              placeholderTextColor={'gray'}
            />
          </View>
          <View>
            <Icon
              name={'mail'}
              size={28}
              color={'blue'}
              style={[styles.inputIcon]}
              underlineColorAndroid="transparent"
            />

            <TextInput
              style={[styles.textInput, {width: windowsWidth - 55}]}
              placeholder="email"
              placeholderTextColor={'gray'}
              keyboardType={'email-address'}
            />
          </View>
          <View>
            <Icon
              name={'lock'}
              size={28}
              color={'blue'}
              style={styles.inputIcon}
              underlineColorAndroid="transparent"
            />

            <TextInput
              style={[styles.textInput, {width: windowsWidth - 55}]}
              placeholder="password"
              secureTextEntry={isPasswordVisible}
              placeholderTextColor={'gray'}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => {
                SetPasswordVisibility();
              }}>
              <Icon
                name={isPasswordVisible === false ? 'eye' : 'eye-off'}
                size={28}
                color={'blue'}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Icon
              name={'lock'}
              size={28}
              color={'blue'}
              style={styles.inputIcon}
              underlineColorAndroid="transparent"
            />

            <TextInput
              style={[styles.textInput, {width: windowsWidth - 55}]}
              placeholder="Confirm password"
              secureTextEntry={isConfirmPasswordVisible}
              placeholderTextColor={'gray'}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => {
                SetConfirmPasswordVisibility();
              }}>
              <Icon
                name={isConfirmPasswordVisible === false ? 'eye' : 'eye-off'}
                size={28}
                color={'blue'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.signupButton, {width: windowsWidth - 55}]}>
            <Text style={styles.signupButtonText}> Sign Up! </Text>
          </TouchableOpacity>
          <Text style={styles.bodyText}> Or login with facebook </Text>
          <TouchableOpacity
            style={[styles.facebookButton, {width: windowsWidth - 55}]}>
            <Icon name={'facebook'} color={'#FFF'} size={28} />
            <Text style={styles.facebookButtonText}> Facebook </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>You already have an account? </Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
