import { StyleSheet, Image, TextInput, ImageBackground, Dimensions} from 'react-native';
import { NativeBaseProvider, Box, ScrollView, Center,  Button, Heading, VStack } from "native-base";
import React, { Component } from "react";
import MapView from 'react-native-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export default function TabOneScresen(this: any, { navigation }: RootTabScreenProps<'TabOne'>) {
  const style = require('./styles');
  const [locatione, setLocation] = React.useState({"latitude": 0, "longitude" : 0});
  const [geocode, setGeocode] = React.useState({"street" : null, "city" : null, "isoCountryCode" : null} );
  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status){
      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      if (location) console.log(location)
      setLocation({"latitude" : location.coords.latitude, "longitude" : location.coords.longitude });
      console.log(locatione.latitude + " latitude")
      console.log(locatione.longitude + " longitude")
    }
  };
  const mapRef = React.createRef();
  const goToMyLocation = async () => {
    this.mapRef.current.animateCamera({center: {"latitude":locatione.latitude, "longitude": locatione.longitude}});
  }
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
      <Text style={ style.title}>Geolokacja</Text>
      <NativeBaseProvider>
      <ScrollView _contentContainerStyle={{
      px: "50px",
      mb: "4",
      minW: "72",
      alignItems: "center",
      indicatorStyle: 'black'
    }}>
      <Button onPress={() => getLocationAsync()}>Lokalizuj</Button>
      <Button onPress={() => goToMyLocation()}>Pokaz</Button>
      <Text>Latitude: {locatione.latitude}</Text>
      <Text>Longitude: {locatione.longitude}</Text>

      <View style={styles.container}>
        <MapView showsMyLocationButton={true} showsUserLocation={true} style={styles.map} />
      </View>
      </ScrollView>
      </NativeBaseProvider>
      </ImageBackground>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});