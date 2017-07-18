import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Text,
  ActivityIndicator,
  FlatList } from 'react-native'

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export class SongsList extends Component {

  _handleShufflePlay = () => {

  }

  _handleSongPlay = (file) => {
    //mutation with this file
  }

  _songRender = ({ id, file, title, trackNumber }) => {
    return(
      <TouchableHighlight
        key={title}
        style={styles.songHighLight}
        onPress={() => this._handleSongPlay(file)}>
        <Text style={styles.songText}>
          {trackNumber}: {title}
        </Text>
      </TouchableHighlight>
    )
  }

  _renderPage = ({ id, name, description, image, songses, artistName }) => {

    const albumName = this.props.navigation.state.params

    if (name === albumName.albumName) {
      const { url } = image.file
      return (
        <View key={id} style={styles.songsContainer}>
          <Image
            source={{uri: url}}
            resizeMode='cover'
            style={styles.BGimage}>
          </Image>
          <View style={styles.imgContent}>
            <Text style={styles.name}>{name} Tracks</Text>
            <TouchableHighlight style={styles.playButton}>
              <Text>Play Me</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.description}>{description}</Text>
          {songses.map(this._songRender)}
        </View>
      )
    }
  }

  render() {
    console.log("this.props =========================", this.props)
    const { data } = this.props
    const { allAlbums, loading, error } = data
    if (loading) {
      return <ActivityIndicator />
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {allAlbums.map(this._renderPage)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30, 30, 31)',
    justifyContent: 'center',
  },
  BGimage: {
    flex: 1,
    height: 275,
    width: null,
  },
  imgContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: 'rgb(46, 241, 14)',
    padding: 20,
  },
  description: {
    zIndex: 4,
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  songHighLight: {
    backgroundColor: "whitesmoke",
    padding: 20,
  },
  songText: {
    color: 'white',
    backgroundColor: 'rgb(251, 75, 162)',
    fontSize: 22,
    fontWeight: '500',
  }
})

export const SONGQUERY = gql`
  query albums {
    allAlbums {
      id
      name
      description
      artistName
      image {
        name
        file {
          url
        }
      }
      songses {
        trackNumber
        title
        file {
          url
        }
      }
    }
  }`

export const withSongs = graphql(SONGQUERY);
export default withSongs(SongsList)
