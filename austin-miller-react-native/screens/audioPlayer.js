import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Constants, Audio } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class Player extends React.Component {

  // _handlePlaySoundAsync = async () => {
  //   await Expo.Audio.setIsEnabledAsync(true);
  //   const sound = new Expo.Audio.Sound();
  //   await sound.loadAsync(require('../../assets/music/E-01-CurseTheRoad.mp3'));
  //   await sound.playAsync();
  // };

  _renderSong = () => {

  }

  render() {

    return (
      <Image
        style={styles.bgImage}
        source={require('../../assets/images/austinOnStage.jpg')} >
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.songTitle}>Curse The Road</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
            style={styles.albumImage}
            source={require('../../assets/images/austinOnStage.jpg')} />
          </View>

          <View style={styles.controllerContainer}>
          <TouchableOpacity>
            <Ionicons
              style={styles.holders}
              name="md-swap"
              size={35}
              color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.holders}
              name="md-skip-backward"
              size={45}
              color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.holders}
              name="md-play"
              size={60}
              color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.holders}
              name="md-skip-forward"
              size={45}
              color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.holders}
              name="md-volume-off"
              size={35}
              color='white' />
          </TouchableOpacity>
          </View>

        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    height: null,
    width: null,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.7)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    padding: 30,
  },
  songTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25,
  },
  imageContainer: {
    height: 250,
  },
  albumImage: {
    flex: 1,
    height: 250,
    width: 250,
  },
  controllerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  holders: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  }
});
