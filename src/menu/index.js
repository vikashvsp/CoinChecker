import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useQuery, } from '@tanstack/react-query'
const Menu = () => {
     const navigation = useNavigation()
     const fetchCoinData = async () => {
          const apiUrl = 'https://api.coincap.io/v2/assets/bitcoin';
          const response = await fetch(apiUrl);
          return response.json();
     };
     const { data, error, isLoading, refetch } = useQuery(['coinData'], fetchCoinData,
          { refetchInterval: 4000, }
     );

     if (isLoading) {
          console.log(isLoading)
          return <Text>Loading...</Text>;
     }

     if (error) {
          console.log(error);
          return <Text>Error: {error.message}</Text>;
     }
     console.log("jo h wahi", data.data.priceUsd);
     return (
          <View>
               <TouchableOpacity onPress={() => {
                    navigation.navigate("splash")
               }}>
                    <Text>Menu</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {
                    navigation.navigate("main")
               }}>
                    <Text>
                         Main
                    </Text>
               </TouchableOpacity>
               {
                    data &&
                    <Text>
                         {data.data.priceUsd}
                    </Text>
               }
          </View>
     )
}

export default Menu