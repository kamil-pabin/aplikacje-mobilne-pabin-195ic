import {FlatList, SafeAreaView, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableHighlight, Button} from 'react-native';
import { WebView } from 'react-native-webview';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';

export default function TabThreeScreen() {
  const [shouldShow, setShouldShow] = React.useState(true);
  const style = require('./styles');
  var value = 0;
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <TouchableOpacity
          style={style.button}
        >
          <Text style={style.napis}>Dotykowy prostokąt</Text>
        </TouchableOpacity>
      
        <View style={style.container}>
          {/*Here we will return the view when state is true 
          and will return false if state is false*/}
          {shouldShow ? (
            <WebView
            source={{uri: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}}
            style={{marginTop: 20}}
        />
          ) : null}
           <TouchableHighlight
          activeOpacity={0.2}
          underlayColor="#fDfDfD"
          onPress={() => setShouldShow(!shouldShow)}
          style={style.button}
          >
          <View style={style.button2}>
            <Text style={style.napis}>Highlight</Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
