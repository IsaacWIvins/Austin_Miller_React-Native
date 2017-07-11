import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

handlePress = (data) => {
  console.log("working data", data)
}

const EngineCover = ({title, data}) =>
  <Image
    source={require('../../assets/images/engineCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.length}>{data.length} Tracks</Text>
    </View>
  </Image>

const ForeignCover = ({title, data}) =>
  <Image
    source={require('../../assets/images/foreignLandsCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.length}>{data.length} Tracks</Text>
    </View>
  </Image>

const BirdsCover = ({title, data}) =>
  <Image
    source={require('../../assets/images/theMorningBirdsCover.jpg')}
    resizeMode='cover'
    style={styles.coverIMG}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.length}>{data.length} Tracks</Text>
    </View>
  </Image>

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 60,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  coverIMG: {
    flex: 1,
    height: null,
    width: null,
  },
  title: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  length: {
  color: "#CCC",
  backgroundColor: 'transparent',
  fontFamily: "Helvetica Neue",
  fontWeight: "300",
  fontSize: 14
  }
});

var Covers = {
  123: EngineCover,
  456: ForeignCover,
  789: BirdsCover
};

 export default Covers;
