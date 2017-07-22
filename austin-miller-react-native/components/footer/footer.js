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
  import { Ionicons } from '@expo/vector-icons'
import { graphql, gql, compose } from 'react-apollo'

export class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {
      queueIndex: 0,
      audioPlaying: false
    };
  }

  _hitPress = () => {
    const { data, _togglePlayPause } = this.props
     const { setParams } = this.props.navigation;
     const hopful = setParams({toggleFunc: this._togglePlayPause})
    this.props.changer(0)
    this.props.navigation.navigate('OldAudio', { data: data });
  }

  _togglePlayPause = () => {
    if (this.state.audioPlaying){
      this.setState({
        audioPlaying: false
      })
    } else if (!this.state.audioPlaying) {
      this.setState({
        audioPlaying: true
      })
    }
  }

  _renderPlayPauseButtons = () => {
    if (this.state.audioPlaying){
      return(
        <Ionicons name="md-pause" size={35} color='#b4b4b4' />
      )
    } else if (!this.state.audioPlaying) {
      return(
        <Ionicons name="md-play" size={35} color='#b4b4b4' />
      )
    }
  }

  renderQueues = (data) => {
    console.log("data ////////////", data)
      return(
        <View key={data.songs.title} style={styles.renderView}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: data.songs.album.image.file.url}}
              resizeMode='cover'
              style={styles.footerImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.footerText}>{data.songs.title}</Text>
          </View>
        </View>
      )
  }

  render() {
    const { data } = this.props
    const { loading, allQueues } = data
    // console.log("this.props//////", this.props)
    // console.log("this.state//////", this.state)

    if (loading) {
      return <ActivityIndicator />
    }
    const helper =  allQueues.length - 1;
    const display = allQueues[helper].songs
    // console.log("display", display)

    return (
      <View style={styles.footer}>

        <View style={styles.navButton}>
          <TouchableOpacity onPress={this._hitPress}>
            <Ionicons name="md-arrow-round-up" size={35} color='#b4b4b4' />
          </TouchableOpacity>
        </View>

        <View style={styles.footerContent}>
          <View key={display.title} style={styles.renderView}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: display.album.image.file.url}}
                resizeMode='cover'
                style={styles.footerImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.footerText}>{display.title}</Text>
            </View>
          </View>
        </View>

        <View style={styles.playPauseButton}>
          <TouchableOpacity onPress={this._togglePlayPause}>
            {this._renderPlayPauseButtons()}
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
    borderTopWidth: 2,
    borderColor: 'black',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContent: {
    flex: 4,
  },
  playPauseButton: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  renderView: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1.5,
  },
  footerImage: {
    flex: 1,
    opacity: .7,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#b4b4b4',
    fontSize: 18,
    fontWeight: '300',
  },
})

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

export default graphql(FOOTERQUERY)(Footer);
