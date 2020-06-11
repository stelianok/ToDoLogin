import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
export default function ForgotPassword({navigation}) {
  const windowsWidth = useWindowDimensions().width;
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
        </View>
      </View>
    </View>
  );
}
