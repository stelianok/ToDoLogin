import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import styles from './styles';
export default function ResetPassword({navigation}) {
  const windowsWidth = useWindowDimensions().width;
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');

  const AlertPop = (title, message) => {
    Alert.alert(`${title}`, `${message}`, [
      {
        text: 'OK',
        onPress: () => {
          console.log('Alert pop working UwU');
        },
      },
    ]);
  };
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
  function VerifyPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }
  async function ChangePass(token, email, paassword, confirmPassword) {
    if (VerifyPassword(password, confirmPassword)) {
      const data = {
        token,
        email,
        password,
      };

      await api
        .post('/auth/reset_password', data)
        .then(function (res) {
          console.log(res.data);
          AlertPop('Success', 'Everything OK!');
          navigation.navigate('Login');
        })
        .catch(function (error) {
          console.log(error.response.data.error);
          AlertPop('Error', error.response.data.error);
        });
    } else {
      AlertPop('Error', "Passwords don't match!");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}> Change Your password! </Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Type here the token that was sent to you via email
          </Text>
          <View>
            <Icon
              name={'key'}
              size={28}
              color={'#7e57c2'}
              style={styles.inputIcon}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.textInput, {width: windowsWidth - 60}]}
              placeholder={'Token'}
              placeholderTextColor={'gray'}
              value={token}
              onChangeText={setToken}
            />
          </View>
          <View>
            <Icon
              name={'mail'}
              size={28}
              color={'#7e57c2'}
              style={styles.inputIcon}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.textInput, {width: windowsWidth - 60}]}
              placeholder={'Email'}
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
              placeholder="new password"
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
              placeholder="Confirm new password"
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
            style={[styles.submitButton, {width: windowsWidth - 60}]}
            onPress={() => {
              ChangePass(token, email, password, confirmPassword);
            }}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
