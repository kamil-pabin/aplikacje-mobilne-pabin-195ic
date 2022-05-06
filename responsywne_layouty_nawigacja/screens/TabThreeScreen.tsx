import { StyleSheet, Image, ImageBackground } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  const style = require('./styles');
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
      <Text style={ style.title}>Rebelianci</Text>
      <View style={style.galeria}>
        <Image
          style={style.logo}
          source={{
            uri: 'https://1.bp.blogspot.com/-VYY3xXP2R4U/XpcD5GcM2eI/AAAAAAAAOjc/tK99gdGvYusnNiZa6g2b1JffCc0vV40KgCNcBGAsYHQ/s1600/best-friend-in-galaxy-chewbacca_TALL.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://www.denofgeek.com/wp-content/uploads/2015/12/big_thumb_cd04cc40bd2e7060c7a2b417b1743b74.jpg?resize=620%2C349',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://cont5.naekranie.pl/media/cache/amp/2017/12/Luke-Skywalker.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://gfx.antyradio.pl/var/antyradio/storage/images/filmy-i-seriale/filmy/dlaczego-ksiezniczka-leia-nie-zostala-jedi-19745/1356491-1-pol-PL/Dlaczego-ksiezniczka-Leia-nie-zostala-Jedi_size-360x270.jpg',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536',
          }}
        />
        <Image
          style={style.logo}
          source={{
            uri: 'https://wszykina.pl/wp-content/uploads/2021/09/Han-Solo-1024x731.jpg',
          }}
        />
      </View>
      </ImageBackground>
    </View>
  );
}
