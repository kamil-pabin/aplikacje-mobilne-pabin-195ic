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
    color: 'yellowgreen',
    textAlign: 'center',
    margin:0,
    padding:0,
  },
  pudelko: {
    width:300,
    height: 120,
    backgroundColor: 'transparent',
    borderWidth:  1,
    borderColor: 'pink',
    borderRadius: 30,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pudelkoMale: {
    width:100,
    height: 100,
    backgroundColor: 'transparent',
    margin: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:  1,
    borderColor: 'cyan',
    borderRadius: 30,
    padding: 10
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
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
