import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Constants, Audio } from 'expo';

export default class Player extends React.Component {

  _handlePlaySoundAsync = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync(require('../assets/music/E-01-CurseTheRoad.mp3'));
    await sound.playAsync();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tcho}
          onPress={this._handlePlaySoundAsync}>
          <Text style={styles.text}>This fucking sucks</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a11da',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tcho: {
    flex: 1,
    backgroundColor: 'rgb(237, 33, 223)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
});
