/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Ionicons';
export default function Login() {
  const windowsWidth = useWindowDimensions().width;
  const [showPass, setShowPass] = useState(true);
  const [press, setPress] = useState(false);

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
      <Header
        title="Sign Up"
        text="Please Registration with email and
              sign up to continue using our app"
      />
      <View style={styles.bodyContainer}>
        <Text style={[styles.bodyText, {color: '#383FDB'}]}>
          Login with email
        </Text>
        <View>
          <Icon
            name={'ios-person'}
            size={28}
            color={'blue'}
            style={styles.inputIcon}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={[styles.textInput, {width: windowsWidth - 55}]}
            placeholder={'Username'}
            placecholderTextColor={'gray'}
          />
        </View>
        <View>
          <Icon
            name={'ios-lock'}
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
          />
          <TouchableOpacity
            style={styles.buttonEye}
            onPress={() => {
              ShowPassword(press);
            }}>
            <Icon
              name={press === false ? 'ios-eye-off' : 'ios-eye'}
              size={26}
              color={'blue'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.loginButton, {width: windowsWidth - 55}]}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.bodyText, {color: '#383FDB'}]}>
          Or Login With Facebook
        </Text>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={{color: '#FFF', fontSize: 25}}> Facebook </Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Don't have an account yet?</Text>
          <TouchableOpacity>
            <Text style={styles.registerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
