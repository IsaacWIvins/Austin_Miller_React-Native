import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight, Image } from 'react-native';


export default class AlbumListItem extends React.Component {

  _handlpress = () => {
    console.log("this.props.album.albums[0].albumImage", this.props.album.albums[0].albumImage);
  }
  render() {
    return (
      <TouchableHighlight onPress={this._handlpress} activeOpacity={ 100 } underlayColor="#ea4b54">
        <Image source={require(this.props.album.background)} />
        <Text>{this.props.album.albums[0].title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  artistName: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  artistSongs: {
    color: "#CCC",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    fontSize: 14
  }
});
