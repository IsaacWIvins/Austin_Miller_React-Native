import React, { Component } from 'react'
import { AppRegistry,
  Animated,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions } from 'react-native'
  import { Ionicons } from '@expo/vector-icons';

import { graphql, gql  } from 'react-apollo';

export default class AudioPlayer extends Component {

  _handlePress = () => {
    this.props.changer(8)
    this.props.navigation.navigate('NewFooter');
  }
  _handlePlay = () => {
    setParams({toggleFunc: this._togglePlayPause})
    // console.log("=================", this.props.navigation.state.params)
  }

  _renderSongses = ({ songses }) => {
    return songses.map(this._renderImage)
  }

  _renderImage = ({ album, file, title }) => {
    const { url } = album.image.file
    const songUrl = file.url
    console.log("title: ", title)
    console.log("url: ", url)
    console.log("songUrl: ", songUrl)
    return (
      <View style={styles.queryContainer}>
        <Image
          style={styles.albumImage}
          source={{uri: url}}>
            <View style={styles.makeShiftNave}>
              <TouchableOpacity onPress={this._handlePress}>
                <View style={styles.back}>
                  <Text style={styles.backText}>Back</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Image>
          <View style={styles.header}>
            <Text style={styles.songTitle}>{title}</Text>
          </View>
      </View>
      )
  }
  render() {
    console.log("///////////// AUDIO PROPS /////////////", this.props)
    // console.log("=================", this.props.navigation.state.params)
    // const { data } = this.props
    // const { loading , allQueues} = data
    // if (loading) {
    //   return <ActivityIndicator />
    // }
    return (
        <View style={styles.container}>
          <ScrollView>

            {/* {allQueues.map(this._renderSongses)} */}

          <View style={styles.controllerContainer}>

            <TouchableOpacity>
              <Ionicons
                style={styles.holders}
                name="md-swap"
                size={30}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                style={styles.holders}
                name="md-skip-backward"
                size={38}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity onPress={this._handlePlay}>
              <Ionicons
                style={styles.holders}
                name="md-play"
                size={50}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                style={styles.holders}
                name="md-skip-forward"
                size={38}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                style={styles.holders}
                name="md-volume-off"
                size={30}
                color='white' />
            </TouchableOpacity>

          </View>
          </ScrollView>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  back: {
    height: 20,
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  backText: {
    fontSize: 22,
    fontWeight: '500',
  },
  header: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25,
  },
  queryContainer: {
    marginTop: 20,
    height: 375,
  },
  albumImage: {
    flex: 1,
    height: null,
    width: null,
  },
  controllerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  holders: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  },
})

// const QUEUEQUERY = gql`
//   query songs {
//   allQueues {
//     name
//     songses {
//       title
//       file {
//         url
//       }
//       album {
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// }`;
//
// export const withSongs = graphql(QUEUEQUERY);
//
// export default withSongs(AudioPlayer);
