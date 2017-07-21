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

  async componentDidMount() {
    console.log("////////////// data ////////////", this.props )
    this._subscribeToQueue()
  }

  _subscribeToQueue = () => {
    this.createQueueSubscription = this.props.data.subscribeToMore({
      document: FOOTERSUB,
      updateQuery: (previousState, {subscriptionData}) => {
        const newMessage = subscriptionData.data.Message.node
        const messages = [newMessage].concat(previousState.allMessages)
        return {
          allMessages: messages
        }
      },
      onError: (err) => console.error(err),
    })
  }

  _hitPress = () => {
    console.log("this.props.data: /////////", this.props.data)
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
    const { data } = this.props
    console.log("////////////// data ////////////", this.props )
    // console.log(" ////////////////////////// FOOTERQUERY", FOOTERQUERY)
    const { loading, allQueues } = data

    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.footer}>
        <View style={styles.navButton}>
          <TouchableOpacity onPress={this._hitPress}>
            <Ionicons name="md-arrow-round-up" size={35} color='#b4b4b4' />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContent}>
          {/* {allQueues.map(this.renderQueues)} */}
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

const FOOTERSUB = gql`
subscription {
  Queue (
    filter: {
      mutation_in: [CREATED]
    }
  ) {
    node {
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
  }
}`;

export default graphql(FOOTERQUERY)(Footer);
