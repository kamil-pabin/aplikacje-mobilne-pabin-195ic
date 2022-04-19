import { StyleSheet, Button, Image, TextInput, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen(this: any, { navigation }: RootTabScreenProps<'TabOne'>) {
  const style = require('./styles');


  const liczby = [];
  //funkcja do generowania losowej liczby z zakresu od min do max
  function randomNumber(min : number, max : number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  //zwykla petla do wypelnienia tablicy losowymi liczbami z powyzszej funkcji
  for(let i=0; i<100; i++){
    liczby.push(randomNumber(0, 1000))
  }
  //mapowanie tablicy liczb podstawowe
  var liczbyWysw = liczby.map(liczba => <Text> {liczba} </Text> )
  //sortowanie
  const liczbySort = liczby.sort((a,b)=>a-b)
  var liczbyWyswSort = liczbySort.map(liczba => <Text> {liczba} </Text> )

  const liczbySortDesc = liczby.sort((a,b)=>b-a)
  var liczbyWyswSortDesc = liczbySortDesc.map(liczba => <Text> {liczba} </Text> )

  return (
    <View style={style.container}>
      <View style={style.galeria}>  

          <Text style={{ fontSize: 20 }}>
           Wygenerowane liczby:
          </Text>

          <View style={style.liczby}>
            {<>{liczbyWysw}</>}
          </View>

          <Text style={{ fontSize: 20 }}>
           Posortowane asc:
          </Text>

          <View style={style.liczby}>
            {<>{liczbyWyswSort}</>}
          </View>

          <Text style={{ fontSize: 20 }}>
           Posortowane desc:
          </Text>

          <View style={style.liczby}>
            {<>{liczbyWyswSortDesc}</>}
          </View>
           
      
      </View>
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
