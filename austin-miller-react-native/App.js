import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import About from './screens/about';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <About />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726982',
  },
});
