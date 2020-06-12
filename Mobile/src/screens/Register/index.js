/* eslint-disable no-shadow */
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

import api from '../../services/api';

import styles from './styles';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Feather';
export default function Register({navigation}) {
  const windowsWidth = useWindowDimensions().width;
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
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
  function RegisterUser(firstName, lastName, email, password, confirmPassword) {
    if (VerifyPassword(password, confirmPassword)) {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };

      api
        .post('/auth/register', data)
        .then(function (res) {
          console.log(res.data.token);
          setToken(res.data.token);
          return true;
        })
        .catch(function (error) {
          console.log(error);
          return false;
        });
    } else if (!VerifyPassword(password, confirmPassword)) {
      console.log(`${password} is different than ${confirmPassword}`);
    }
  }
  function VerifyPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      return true;
    } else if (password !== confirmPassword) {
      return false;
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
              value={firstName}
              onChangeText={setFirstName}
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
              value={lastName}
              onChangeText={setLastName}
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
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
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
              value={confirmPassword}
              onChangeText={setConfirmPassword}
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
            style={[styles.signupButton, {width: windowsWidth - 55}]}
            onPress={() => {
              //console.log(firstName, lastName, email, password,confirmPassword);
              // eslint-disable-next-line prettier/prettier
              if (RegisterUser(firstName, lastName, email, password,confirmPassword)){
                navigation.navigate('Login');
              } else {
                //error
              }
            }}>
            <Text style={styles.signupButtonText}> Sign Up! </Text>
          </TouchableOpacity>
          <Text style={[styles.bodyText, {marginTop: 5}]}>
            Or login with facebook
          </Text>
          <TouchableOpacity
            style={[styles.facebookButton, {width: windowsWidth - 55}]}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name={'facebook'} color={'#FFF'} size={28} />
            <Text style={styles.facebookButtonText}> Facebook </Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.loginText}>You already have an account? </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
