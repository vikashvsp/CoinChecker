import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
     const navigation = useNavigation()
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
          </View>
     )
}

export default Menu