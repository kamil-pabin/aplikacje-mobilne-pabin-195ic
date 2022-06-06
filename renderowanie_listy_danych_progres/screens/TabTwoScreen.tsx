import { StyleSheet, Button, Image, TextInput, ImageBackground} from 'react-native';
import { NativeBaseProvider, Box, ScrollView, Center, Heading, VStack, Icon} from "native-base";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Slider from '@react-native-community/slider';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const style = require('./styles');
  let value = React.useState(0)
  const [isValue, setValue] = React.useState(5);
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
      <View style={style.container}>
        <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <Text style={ style.title}>Rebelianci</Text>
        <NativeBaseProvider>
        <ScrollView _contentContainerStyle={{
        //px: "50px",
        //mb: "4",
        //minW: "72",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        indicatorStyle: 'black',
        flexDirection: "row",
        flexWrap: 'wrap',
        width:300,
      }}>
         
         <Image 
          style={{
            resizeMode: "cover",
            height: isValue*20,
            width: isValue*20
          }}
          source={require('../assets/images/hansolo.jpeg')} 
          />
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            step={1}
            maximumValue={10}
            onValueChange={value => setValue(value)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text>
            {isValue}
          </Text>
        </ScrollView>
        
        </NativeBaseProvider>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
