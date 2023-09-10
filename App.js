import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import { useEffect, useState } from 'react';
import Splash from './src/splash';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Splash />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
