import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import { useEffect, useState } from 'react';
export default function App() {
  const [myData, setMyData] = useState()
  const apiUrl = "https://api.coincap.io/v2/assets/bitcoin"
  const time = new Date()
  useEffect(() => {
    axios.get(apiUrl)
      .then(function (response) {
        const data = response.data
        setMyData(data.data)
      })
  }, [])
  console.log(myData);
  return (
    <View style={styles.container}>
      {
        myData && (
          <>
            <Text>{myData.id}</Text>
            <Text>{myData.priceUsd}</Text>
          </>
        )
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
