import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumListItem from './albumListItem';
import { Austin } from "../../assets/austinData/austinData";


export default class AlbumsList extends React.Component {

  render() {
    // console.log('Austin[0].albums on AlbumList ==========', Austin[0].albums);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Albums
        </Text>
        <View>
          <AlbumListItem album= { Austin[0].albums } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  }
});
