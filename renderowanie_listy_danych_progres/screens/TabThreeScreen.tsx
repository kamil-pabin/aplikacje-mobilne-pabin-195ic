import {FlatList, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, TouchableHighlight, Button} from 'react-native';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { NativeBaseProvider, Box, ScrollView, Center, Heading, VStack, Icon} from "native-base";
import { Image } from 'react-native-elements';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';

export default function TabThreeScreen() {
  const [shouldShow, setShouldShow] = React.useState(true);
  const style = require('./styles');
  var value = 0;
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
      <Image
        source={require('../assets/images/hansolo.jpeg')} 
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={style.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <Ionicons name="home" size={32} color="red" />
        <Ionicons name="airplane-outline" size={32} color="black" />
        <Ionicons name="alarm" size={32} color="green" />
        <Ionicons name="american-football-sharp" size={32} color="black" />
        <Ionicons name="at-circle" size={32} color="pink" />
        <Ionicons name="beer" size={32} color="gold" />
        <Ionicons name="bicycle-outline" size={32} color="blue" />
        <Ionicons name="bug" size={32} color="brown" />
      </View>   
      </View>
    </SafeAreaView>
  );
}
