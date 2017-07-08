import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import About from './screens/about';
import Connect from './screens/contact';
import Music from './screens/music';
import Player from './screens/audioPlayer';
import AlbumsList from './components/albums/albumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AlbumsList />
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
