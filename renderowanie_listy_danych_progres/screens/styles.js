'use strict';
import { warmUpAsync } from 'expo-web-browser';
import { StyleSheet, YellowBox } from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    margin:20,
  },
  title: {
    fontSize: 20,
    width: 100,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    margin:0,
    padding:0,
  },
  liczby: {
    width:290,
    backgroundColor: 'transparent',
    borderWidth:  1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    margin:0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  pudelko: {
    width:300,
    backgroundColor: 'transparent',
    borderWidth:  1,
    borderColor: 'pink',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
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
    backgroundColor: 'transparent',
    height: 400,
    display:'flex',
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});
