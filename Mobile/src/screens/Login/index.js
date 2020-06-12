/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';

import api from '../../services/api';
import styles from './styles';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Feather';
export default function Login({navigation}) {
  const windowsWidth = useWindowDimensions().width;
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login(email, password) {
    const data = {
      email,
      password,
    };
    api
      .post('/auth/authenticate', data)
      .then(function (res) {
        console.log(res.data.token);
        navigation.navigate('Home');
        return true;
      })
      .catch(function (err) {
        console.log(err.response.data.error);
        return false;
      });
  }
  // eslint-disable-next-line no-shadow
  function ShowPassword(press) {
    if (press) {
      setPress(false);
      setShowPass(true);
    } else if (press === false) {
      setPress(true);
      setShowPass(false);
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Sign In" text="Please Login to continue using our app" />
      <View style={styles.bodyContainer}>
        <Text style={[styles.bodyText, {color: '#383FDB'}]}>
          Login with email
        </Text>
        <View>
          <Icon
            name={'mail'}
            size={28}
            color={'blue'}
            style={styles.inputIcon}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={[styles.textInput, {width: windowsWidth - 55}]}
            placeholder={'Email'}
            placecholderTextColor={'gray'}
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
            placeholder={'Password'}
            secureTextEntry={showPass}
            placecholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.buttonEye}
            onPress={() => {
              ShowPassword(press);
            }}>
            <Icon
              name={press === false ? 'eye-off' : 'eye'}
              size={26}
              color={'blue'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPasswordButtonText}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.loginButton, {width: windowsWidth - 55}]}
          onPress={() => {
            //navigation.navigate('Home');
            Login(email, password);
          }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.bodyText, {color: '#383FDB'}]}>
          Or Login With Facebook
        </Text>
        <TouchableOpacity
          style={[styles.facebookButton, {width: windowsWidth - 55}]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name={'facebook'} size={24} color="#fff" />
          <Text style={{color: '#FFF', fontSize: 25, fontFamily: 'Arial'}}>
            Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.registerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
