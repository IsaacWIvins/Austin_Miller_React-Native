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
      queueIndex: 0
    };
  }

  _hitPress = () => {
    this.props.changer(0)
    this.props.navigation.navigate('OldAudio');
  }

  // _renderFooter = (data, i) => {
  //   console.log(" data /////////////////////", data)
  //   console.log(" i //////////////////", i)
  //   return(
  //         <Text style={styles.footerText}>Hit Me</Text>
  //   )
  // }
  renderQueues = (data) => {
    const { queueIndex } = this.state
    const footerSong = data.songses[queueIndex]
    const url = footerSong.album.image.file.url
    console.log(" data.songses[queueIndex] /////////////", data.songses[queueIndex])
    console.log(" footerSong /////////////", footerSong)
    console.log(" url /////////////", url)
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

    // console.log(" state", this.state)
    const { data } = this.props
    const { loading, allQueues } = data

    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <TouchableOpacity style={styles.footer} onPress={this._hitPress}>
        {/* <View style={styles.renderView}> */}
          {/* {allQueues.map( ({songses}) => { return songses.map(this._renderFooter)})} */}
          {allQueues.map(this.renderQueues)}
        {/* </View> */}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: '#333'
  },
  renderView: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 58,
    width: 58,
    marginLeft: 20,
  },
  footerImage: {
    flex: 1,
    opacity: .7,
    // backgroundColor: 'blue'
    // tintColor: '#b4b4b4',
  },
  textContainer: {
    justifyContent: 'center',
  },
  footerText: {
    marginLeft: 40,
    color: '#b4b4b4',
    fontSize: 18,
    fontWeight: '300',
  },
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
