import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from './config/router.js';
import Player from './components/audio/audioPlayer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ece7f5',
  },
});
