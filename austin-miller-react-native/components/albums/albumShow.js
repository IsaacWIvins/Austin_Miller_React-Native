import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import Backgrounds from '../backgrounds/albumBackground';

const extractKey = ({id}) => id;

export default class AlbumShow extends React.Component {

  _handlePress = (audio) => {
    this.props.navigation.navigate('Player', { ...audio });
  }

  renderData = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => this._handlePress(item)}>
        <View style={styles.songContainer}>
          <Text style={styles.songTitle}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { albumImage, data, title, description } = this.props.navigation.state.params;
    const ImgBackground = Backgrounds[title];

    return (
      <ScrollView style={styles.container}>
        <View>
          {ImgBackground()}
        </View>
        <Text style={styles.albumDescription}>{description}</Text>
        <FlatList
          data={data}
          style={styles.listContainer}
          renderItem={this.renderData}
          keyExtractor={extractKey}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  albumDescription: {
    color: '#ccc',
    fontWeight: '500',
    fontSize: 18,
    padding: 15,
  },
  listContainer: {
    flex: 1,
  },
  songTitle: {
    fontWeight: '700',
    color: 'white',
    fontSize: 23,
    padding: 10,
  },
  songContainer: {
    backgroundColor: 'black',
    marginTop: 7,
  },
  albumTitle: {
    fontWeight: '700',
    fontSize: 30,
  },
  bgImage: {
    flex: 1,
  }
});
