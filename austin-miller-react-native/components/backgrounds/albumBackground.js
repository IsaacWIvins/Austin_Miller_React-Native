import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const EngineBackground = () =>
  <Image source={require('../../assets/images/engineCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
  </Image>

const ForeignBackground = () =>
  <Image source={require('../../assets/images/foreignLandsCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
  </Image>

const BirdsBackground = () =>
  <Image source={require('../../assets/images/theMorningBirdsCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
  </Image>

const styles = StyleSheet.create({
  coverIMG: {
    flex: 1,
    height: 200,
    width: null,
  }
});

var Backgrounds = {
  "Engine": EngineBackground,
  "Foreign Lands": ForeignBackground,
  "The Morning Birds EP": BirdsBackground,
};

 export default Backgrounds;
