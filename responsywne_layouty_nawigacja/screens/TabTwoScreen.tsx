import { StyleSheet, Image, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const style = require('./stylesImperium');
  const image = { uri: "https://cdnb.artstation.com/p/assets/images/images/030/353/723/4k/benjamin-last-bla-sithtemple-blast-v001.jpg?1600346461" };
  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
      <Text style={ style.title}>Imperium</Text>
      <View style={style.galeria}>
        <Image
          style={style.logo}
          source={{
            uri: 'https://bi.im-g.pl/im/74/58/11/z18188660V,-b-Darth-Vader-Gwiezdne-wojny--Powrot-Jedi--b--br-.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://i.pinimg.com/originals/a3/6d/8b/a36d8b4e845a4be83714e560cee0d37f.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://static.wikia.nocookie.net/shaniverse/images/2/2f/Darth_Sidious.jpg/revision/latest?cb=20210120233736',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/X-wing-and-TIE-Fighters-on-Coruscant-1.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://static.wikia.nocookie.net/starwars/images/4/46/Gwiazda_%C5%9Bmierci_II.jpg/revision/latest?cb=20150920080013&path-prefix=pl',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://static.wikia.nocookie.net/disney/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20170227161455&path-prefix=pl',
          }}
        />
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
