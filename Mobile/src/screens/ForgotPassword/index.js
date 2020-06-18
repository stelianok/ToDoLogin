import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
  Alert,
} from 'react-native';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
export default function ForgotPassword({navigation}) {
  const windowsWidth = useWindowDimensions().width;

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const AlertPop = (title, message) => {
    Alert.alert(`${title}`, `${message}`, [
      {
        text: 'OK',
        onPress: () => console.log('Error is working'),
      },
    ]);
  };
  async function ForgotPass(email) {
    const data = {email: email};
    await api
      .post('auth/forgot_password', data)
      .then(function (res) {
        AlertPop('Success', res.data.Ok);
        navigation.navigate('ResetPassword');
      })
      .catch(function (err) {
        AlertPop('Error', err.response.data.error);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}> Forgot Your password? </Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Don't worry, we will send you a token in your email so you can
            change it. :)
          </Text>

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
          <TouchableOpacity
            style={[styles.submitButton, {width: windowsWidth - 60}]}
            onPress={() => {
              ForgotPass(email);
            }}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
