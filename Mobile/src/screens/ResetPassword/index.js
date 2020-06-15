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
export default function ResetPassword({navigation}) {
  const windowsWidth = useWindowDimensions().width;
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleText}> Change Your password! </Text>
        <View style={styles.card}>
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
            style={[styles.submitButton, {width: windowsWidth - 60}]}
            onPress={() => {}}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
