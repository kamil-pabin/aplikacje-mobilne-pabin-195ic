import {ActivityIndicator, StyleSheet, Image, ImageBackground } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  const style = require('./styles');
  
  return (
    <View style={style.container}>
      <View style={style.galeria}>  
          
      <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Krok 1 !</Text>
                <ActivityIndicator size="small" color="red"/>
                <Text style={{ fontSize: 20 }}>
                Kamil
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Krok 2!</Text>
                <ActivityIndicator size="large" color="yellow"/>
                <Text style={{ fontSize: 24 }}>
                Pabin
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Krok 3!</Text>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text style={{ fontSize: 27 }}>
                Ocena 5
                </Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
      
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
