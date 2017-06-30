import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import About from './screens/about';
import Connect from './screens/contact';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Connect />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726982',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
