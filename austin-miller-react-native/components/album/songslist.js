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

import { graphql, compose, gql } from 'react-apollo';

export class SongsList extends Component {

  _handleShufflePlay = () => {

  }

  _handleSongPlay = (data) => {
    const { id } = data
    // console.log(" ========== songlist =========", data)
    this.props.createQueue({
      variables: { songsId: id }
    }).then(res => {
      console.log('res:', res)
      console.log('FOOTERQUERY ///// ', FOOTERQUERY)
      this.props.FOOTERQUERY.refetch()}
    ).catch(err => {
      console.log('err:', err)
    })
  }


  _songRender = (data) => {
    return(
      <TouchableHighlight
        key={data.id}
        style={styles.songHighLight}
        onPress={() => this._handleSongPlay(data)}>
        <Text style={styles.songText}>
          {data.trackNumber}: {data.title}
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
    const { SONGQUERY, createQueue } = this.props
    const { allAlbums, loading, error } = SONGQUERY
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
        id
        trackNumber
        title
        file {
          url
        }
      }
    }
  }
`

const createQueue = gql`
  mutation createQueue($songsId: ID!) {
    createQueue(songsId: $songsId) {
      id
      songs {
        file {
          url
        }
      }
    }
  }
`
const FOOTERQUERY = gql`
  query songs {
  allQueues {
    songs {
      title
      album {
        image {
          file {
            url
          }
        }
      }
    }
  }
}`;

export const Wrapper = compose(
  graphql(SONGQUERY, { name: 'SONGQUERY' }),
  graphql(FOOTERQUERY, { name: 'FOOTERQUERY' }),
  graphql(createQueue, { name: 'createQueue' }),
);

export default Wrapper(SongsList)
