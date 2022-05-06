import { StyleSheet, Image, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const style = require('./styles');
  const image = { uri: "https://cdnb.artstation.com/p/assets/images/images/030/353/723/4k/benjamin-last-bla-sithtemple-blast-v001.jpg?1600346461" };
  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
      <Text style={ style.title}>Laborka 2</Text>
      <View style={style.galeria}>      
        <View style={style.pudelko}>
         <Text>
           -Spread syntax pozwala rozwinąć wyrażenie tam gdzie oczekujemy 0 lub więcej argumentów.
         </Text>
         <Text>
           -Parametry REST pozwalają funkcji przyjąć nieskończoną liczbę parametrów.
         </Text>
        </View>
        <View style={style.pudelkoMale}>
          <Text>
            1
          </Text>
        </View>
        <View style={style.pudelkoMale}>
          <Text>
            2
          </Text>
        </View>  
        <View style={style.pudelkoMale}>
          <Text>
            3
          </Text>
        </View>
        <View style={style.pudelko}>
          <Text>
            -Hook useState pozwala zakotwiczyc się w jakimś miejscu. Np. gdy chcemy przechowywac wartośc, ktorej chcemy potem uzyc, to mozemy sie za jego pomoca do niej odwolac, a raczej wywolac funkcja. Dziala to tak jak w reactcie https://pl.reactjs.org/docs/hooks-state.html https://reactnative.dev/docs/state
          </Text>
        </View>
      </View>
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
