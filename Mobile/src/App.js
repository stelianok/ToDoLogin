/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#383FDB" />
      <Routes />
    </>
  );
}
