import React from 'react';
import {View, StatusBar} from 'react-native';

import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Login from './screens/Login';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#383FDB" />
      <Login />
    </>
  );
}
