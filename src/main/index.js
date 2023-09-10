import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Main = () => {
     const navigation = useNavigation()
     return (
          <View>
               <TouchableOpacity onPress={() => {
                    navigation.navigate("splash")
               }}>

                    <Text>Back to pavillion</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {
                    navigation.navigate("menu")
               }}>

                    <Text>one back</Text>
               </TouchableOpacity>
          </View>
     )
}

export default Main