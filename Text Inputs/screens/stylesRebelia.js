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
    color: 'lightblue',
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
    padding: 10,
    backgroundColor: 'transparent',
    height: 400,
    display:'flex',
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
