import { StyleSheet, Image, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
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
  const liczbySort = liczby.filter(checkEven)
  var liczbyWyswSort = liczbySort.map(liczba => <Text> {liczba} </Text> )

  const liczbySortDesc = liczby.filter(e => !checkEven(e))
  var liczbyWyswSortDesc = liczbySortDesc.map(liczba => <Text> {liczba} </Text> )
 
  function checkEven(even : number) {
    return (even % 2) == 0;
  }
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
           Tylko parzyste (filter):
          </Text>

          <View style={style.liczby}>
            {<>{liczbyWyswSort}</>}
          </View>

          <Text style={{ fontSize: 20 }}>
           Tylko nieparzyste (filter):
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
