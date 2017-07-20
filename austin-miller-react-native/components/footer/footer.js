import React, { Component } from 'react'
import {
  AppRegistry,
  Animated,
  ActivityIndicator,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity } from 'react-native'
import { graphql, gql  } from 'react-apollo';

export class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {
      queueIndex: 0,
      audioPlaying: false
    };
  }

  _hitPress = () => {
    this.props.changer(0)
    this.props.navigation.navigate('OldAudio');
  }

  _togglePlayPause = () => {
    if(this.state.audioPlaying){
      this.setState({
        audioPlaying: false
      })
    } else if (!this.state.audioPlaying) {
      this.setState({
        audioPlaying: true
      })
    }
  }

  renderQueues = (data) => {
    const { queueIndex } = this.state
    const footerSong = data.songses[queueIndex]
    const url = footerSong.album.image.file.url

      return(
        <View key={footerSong.title} style={styles.renderView}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: url}}
              resizeMode='cover'
              style={styles.footerImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.footerText}>{footerSong.title}</Text>
          </View>
        </View>
      )
  }

  render() {
    console.log(" ////////////////////////// state", this.state)
    const { data } = this.props
    const { loading, allQueues } = data

    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.footer}>
        <View style={styles.navButton}>
          <TouchableOpacity onPress={this._hitPress}>
            <Text>Nav Button</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContent}>
          {allQueues.map(this.renderQueues)}
        </View>
        <View style={styles.playPauseButton}>
          <TouchableOpacity onPress={this._togglePlayPause}>
            <Text>Play Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: '#333'
  },
  navButton: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerContent: {
    flex: 3,
    backgroundColor: 'blue',
  },
  playPauseButton: {
    flex: 1,
    backgroundColor: 'red',
  },
  renderView: {
    flex: 1,
    flexDirection: 'row',
  },
  // imageContainer: {
  //   height: 58,
  //   width: 58,
  //   marginLeft: 20,
  // },
  // footerImage: {
  //   flex: 1,
  //   opacity: .7,
  // },
  // textContainer: {
  //   justifyContent: 'center',
  // },
  // footerText: {
  //   marginLeft: 40,
  //   color: '#b4b4b4',
  //   fontSize: 18,
  //   fontWeight: '300',
  // },
})

const FOOTERQUERY = gql`
  query songs {
  allQueues {
    songses {
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

export const withQueue = graphql(FOOTERQUERY);
export default withQueue(Footer);
