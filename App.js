import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';
import AllProducts from './App/screens/AllProducts'

export default function App() {

  return (
    <AllProducts/>
    //<WelcomeScreen />
  );
}


