import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';
import Covers from '../coverPhotos/covers';
const extractKey = ({ id }) => id;

export default class AlbumListItem extends React.Component {

  _handlePress = (item) => {
    this.props._renderNavPage(item)
  }

  render() {
    const { album } = this.props;
    const AlbumCover = Covers[album.id];
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this._handlePress(album)}>
          {AlbumCover(album)}
        </TouchableHighlight>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
