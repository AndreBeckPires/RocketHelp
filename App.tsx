import {NativeBaseProvider} from 'native-base'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SignIn} from "./src/screens/SignIn";


export default function App() {
  return (
    <NativeBaseProvider>
        <SignIn></SignIn>
    </NativeBaseProvider>
    
  );
}
