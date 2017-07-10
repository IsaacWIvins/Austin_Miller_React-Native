import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableHighlight, FlatList } from 'react-native';

const extractKey = ({id}) => id;

export default class AlbumShow extends React.Component {

  _handlePress = (audio) => {
    console.log("pressed");
    console.log("audio == ", audio)
  }

  renderData = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => this._handlePress(item.audio)}>
        <View style={styles.songContainer}>
          <Text style={styles.songTitle}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { albumImage, data, title, description } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.albumTitle}>{title}</Text>
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
    backgroundColor: '#686273',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  songTitle: {
    fontWeight: '500',
    fontSize: 20,
    padding: 10,
  },
  albumTitle: {
    fontWeight: '700',
    fontSize: 30,
  },
});
