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

import styles from './styles';
export default function ForgotPassword({navigation}) {
  const windowsWidth = useWindowDimensions().width;

  const InvalidTokenAlert = () => {
    Alert.alert('Token', 'Token Invalid!!!', [
      {
        text: 'OK',
        onPress: () => console.log('invalid Token'),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}> Forgot Your password? </Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Don't worry, we will send you a token in your email so you can
            change you're password. :)
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
            />
          </View>
          <TouchableOpacity
            style={[styles.submitButton, {width: windowsWidth - 60}]}
            onPress={() => {}}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>
            Type here the token that was sent to you
          </Text>
          <View>
            <Icon
              name={'lock'}
              size={28}
              color={'#7e57c2'}
              style={styles.inputIcon}
              underlineColorAndroid="transparent"
            />
            <TextInput
              style={[styles.textInput, {width: windowsWidth - 60}]}
              placeholder={'Token'}
              placeholderTextColor={'gray'}
            />
          </View>
          <TouchableOpacity
            style={[styles.submitButton, {width: windowsWidth - 60}]}
            onPress={() => {
              InvalidTokenAlert();
              navigation.navigate('ResetPassword');
            }}>
            <Text style={styles.submitButtonText}>Submit Token</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
