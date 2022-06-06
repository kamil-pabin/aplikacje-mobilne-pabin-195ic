import {ActivityIndicator, StyleSheet, Image, ImageBackground, Animated, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
import { AppRegistry } from 'react-native'
import Swiper from 'react-native-swiper'
import {NetInfoStateType, useNetInfo} from "@react-native-community/netinfo";
import React, { Component } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Entypo, Ionicons } from '@expo/vector-icons';



const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

const style = require('./styles');
const YourComponent = () => {
  const netInfo = useNetInfo();
  return (
    <View>
      <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
      <Ionicons name={"wifi"} size={32} color={netInfo.type?.toString() == "wifi" ? "green" : "red"} />
      <Ionicons name={"ios-cellular-sharp"} size={32} color={netInfo.type?.toString() =="celluar" ? "green" : "red"} />

      <Ionicons name={netInfo.isConnected?.toString() ? "ios-checkbox-sharp" : "ios-close-circle-outline"} size={32} color={netInfo.isConnected?.toString() ? "green" : "red"} />
      </View>
    </View>
  );
};
export default class SwiperComponent extends Component {
  
  render() {
    return (
      
      <SafeAreaView style={style.container}>
      <View style={style.container}>
      <View style={style.container}>
        <YourComponent />
        
      </View>   
      </View>
    </SafeAreaView>
       
    )
  }
}
