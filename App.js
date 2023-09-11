import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import { useEffect, useState } from 'react';
import Splash from './src/splash';
import Menu from './src/menu';
import Main from './src/main';
import { NavigationContainer } from '@react-navigation/native'; // Add this import
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const Stack = createStackNavigator(); // Create a stack navigator
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={{ flex: 1, marginTop: '10%' }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
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
