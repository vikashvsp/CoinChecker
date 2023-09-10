import { View, Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/SimpleLineIcons"
const Splash = () => {
     return (
          <SafeAreaView style={styles.container}>
               <View style={styles.fullscreen}>
                    <Image
                         style={styles.image}
                         source={require('../../assets/cryptocurrency.jpg')}
                    />
               </View>
               <Text style={styles.text}>Welcome to CoinChecker</Text>
               <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                         // Handle button press action here
                    }}
               >
                    <Text style={styles.buttonText}>Proceed</Text>
                    <Icon name="arrow-right" size={20} color="#000" />

               </TouchableOpacity>
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     fullscreen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     image: {
          flex: 1,
          width: 950,
          height: '100%',
          resizeMode: 'contain',
          transform: [{ rotate: '-90deg' }],
     },
     text: {
          fontFamily: 'monospace',
          alignSelf: 'center',
          position: 'absolute', // Position text absolutely in the middle
          top: '60%',             // Place text 50% from the top
          transform: [{ translateY: -20 }],
          fontSize: 50
     },
     button: {
          position: 'absolute',
          bottom: 40,
          alignSelf: 'center',
          backgroundColor: '#fff', // Button background color
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          width: 250,
          borderColor: 'black',
          borderWidth: 5,
          flexDirection: 'row',
          justifyContent: 'space-between'
     },
     buttonText: {
          color: 'black', // Text color
          fontWeight: 'bold', // Text font weight
     },
});

export default Splash;
