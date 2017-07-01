import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity} from 'react-native';

export default class Connect extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('../assets/images/headshot.jpg')} style={styles.image} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Contact Austin</Text>
          <Text style={styles.contactContent}>Paragraph talking about reasons to connect with austin or the proper times and what not.</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Follow</Text>

          <View style={styles.contactTouchables}>

            <View style={[styles.button, {backgroundColor: 'rgb(17, 66, 193)'}]}>
              <TouchableOpacity
                onPress={this.runFacebook}>
                <Text style={styles.btnText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.button, {backgroundColor: 'rgb(31, 193, 17)'}]}>
              <TouchableOpacity
                onPress={this.runSpotify}>
                <Text style={styles.btnText}>Spotify</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.button, {backgroundColor: 'rgb(135, 155, 208)'}]}>
              <TouchableOpacity
                onPress={this.runBandcamp}>
                <Text style={styles.btnText}>Bandcamp</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>
    );
  }

  runFacebook = () => {
    Linking.openURL('https://www.facebook.com/austinmillermusic/?fref=ts');
  };

  runSpotify = () => {
    Linking.openURL('https://open.spotify.com/artist/3MEFFWySdL0MYCfJCR1Mej');
  };

  runBandcamp = () => {
    Linking.openURL('https://austinmiller.bandcamp.com/');
  }



}//ends connect class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(102, 116, 116)',
  },
  imgContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 3,
    borderColor: 'whitesmoke',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgb(176, 175, 158)'
  },
  contactContent: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  btnText: {
    color: 'white',
    fontSize: 15,
  },
  contactTouchables: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
