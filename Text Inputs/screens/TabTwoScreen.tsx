import React from "react";
import { StyleSheet, Image, ImageBackground} from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export default function TabTwoScreen() {
  const style = require('./styles');
   const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Layout style={styles.container} level='1'>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'red',
    width: '100%',
    height: '100%'
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
