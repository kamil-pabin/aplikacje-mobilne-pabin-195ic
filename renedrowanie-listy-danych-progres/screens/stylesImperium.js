'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'flex-start',
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    margin:0,
    padding:0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 80,
    height: 80,
  },
  galeria: {
    padding: 25,
    backgroundColor: 'transparent',
    height: 300,
    display:'flex',
    flexDirection: "column",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
