import React, { useState } from 'react';
import { StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen() {
  const style = require('./styles');
  const [timesPressed, setTimesPressed] = useState(0);
  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }
  const image = { uri: "https://external-preview.redd.it/MRHUHDtLtcOJ8OEpx6znVGl2mKUcY0Ng2tc5cGhCB50.jpg?auto=webp&s=9b86a5fe4f97774212a4ccdf5ca0f9c9488d20e4" };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console" style={styles.text2}>{textLog}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'red',
    fontSize: 24
  },
  text2: {
    color: 'blue'
  },
  wrapperCustom: {
    borderRadius: 8,
    width: 200,
    justifyContent: "center",
    alignContent: 'center',
    alignItems: 'center',
    padding: 6,
    color: 'red'
  },
  logBox: {
    padding: 20,
    color: 'red',
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});
