import {FlatList, SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  var j = 0;
  const style = require('./styles');
  //funkcja do generowania losowej liczby z zakresu od min do max
  function randomNumber(min : number, max : number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
      }
      return result;
    }
  //zwykla petla do wypelnienia tablicy losowymi liczbami z powyzszej funkcji
  
  var DATA = [
    
  ];
  for(let i=0; i<10; ++i){
    DATA[j] = {id: j.toString(), title: makeid(1).toString()}
    j++;
  }
  function generateMore(){
    for(let i=0; i<10; ++i){
      DATA[j] = {id: j.toString(), title: makeid(1).toString()}
      j++
    }
  }
  const Item = ({ title }) => (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={generateMore}
      />
    </SafeAreaView>
  );
}
