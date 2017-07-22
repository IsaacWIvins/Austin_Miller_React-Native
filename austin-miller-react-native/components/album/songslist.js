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
        // style={styles.songHighLight}
        onPress={() => this._handleSongPlay(data)}>
        <View style={styles.songHighLight}>
          <Text style={styles.songText}>{data.title}</Text>
          <Text style={styles.songTime}>4:02</Text>
        </View>
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
          {songses.map(this._songRender)}
          <Text style={styles.description}>{description}</Text>
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
    console.log("============== PROPS =======", this.props)
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
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  BGimage: {
    flex: 1,
    opacity: .7,
    height: 275,
    width: null,
  },
  imgContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  songHighLight: {
    justifyContent: 'flex-start',
    padding: 9,
  },
  songText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
  },
  songTime: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
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
  allQueues (orderBy:createdAt_ASC) {
    songs {
      title
      album {
        image {
          file {
            url
          }
        }
      }
      file {
        url
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
