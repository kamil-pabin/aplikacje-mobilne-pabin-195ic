import { StyleSheet, Button, Image, TextInput, ImageBackground } from 'react-native';
import React from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabOneScreen(this: any, { navigation }: RootTabScreenProps<'TabOne'>) {
  const style = require('./styles');
  const [text, onChangeText] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [focus, setFocus] = React.useState(false)
  const [text3, onChangeText3] = React.useState("");
  return (
    <View style={style.container}>
      <View style={style.galeria}>  
      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%', color:'blue' }}>
        Pole 1 Stany, wyswietlanie
      </Text>
      <TextInput
        placeholder='Wpisz coś'
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%' }}>
        Wpisany tekst: {text}
      </Text>

      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%', color: 'red' }}>
        Pole 2, Klawiatura numeryczna, max znakow - 9, zmiana stylu przy blur i focus
      </Text>
      <TextInput
        placeholder='Wpisz coś'
        style={focus ? styles.inputFocus : styles.inputBlur}
        autoCompleteType="email"
        keyboardType='number-pad'
        maxLength={9}
        onFocus={()=> setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChangeText={onChangeText2}
        value={text2}
      />
      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%' }}>
        Wpisany tekst: {text2}
      </Text>
      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%', color: 'orange' }}>
        Pole 3, Multiline + 3 linie + zmiany stylow na blur/focus
      </Text>
      <TextInput
        placeholder='Wpisz coś'
        style={focus ? styles.inputFocus : styles.inputBlur}
        multiline= {true}
        numberOfLines={3}
        onFocus={()=> setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChangeText={onChangeText3}
        value={text3}
      />
      <Text style={{ fontSize: 20, flexWrap: 'wrap', maxWidth: '90%' }}>
        Wpisany tekst: {text3}
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 120,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    backgroundColor: 'white'
  },
  inputFocus: {
    width: 120,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'red',
    backgroundColor: 'beige'
  },
  inputBlur: {
    width: 120,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    borderColor: 'darkblue',
    backgroundColor: 'grey'
  },
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
