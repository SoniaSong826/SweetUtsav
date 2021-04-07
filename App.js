import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen';
import AllProducts from './App/screens/AllProducts';
import ItemDetails from './App/screens/ItemDetails';
import FunctionMenu from './App/components/FunctionMenu';

export default function App() {

  return (
    //<ItemDetails itemName={"Balushahi"}></ItemDetails>
    //<AllProducts/>
    //<WelcomeScreen />
    <FunctionMenu/>
  );
}


