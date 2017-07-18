import React, { Component } from 'react'
import { AppRegistry,
  Animated,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions } from 'react-native'
  import { Ionicons } from '@expo/vector-icons';

import { graphql, gql  } from 'react-apollo';

export class AudioPlayer extends Component {

  _handlePress = () => {
    this.props.changer(8)
    this.props.navigation.navigate('NewFooter');
  }

  render() {
    console.log("///////////////// AudioPlayer PROPS /////////////", this.props)
    return (
        <View style={styles.container}>

          <View style={styles.makeShiftNave}>
            <TouchableOpacity onPress={this._handlePress}>
              <View style={styles.back}>
                <Text>Back</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.albumImage}
              source={require('../../assets/images/austinOnStage.jpg')} />
          </View>

          <View style={styles.header}>
            <Text style={styles.songTitle}>Curse The Road</Text>
          </View>

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

            <TouchableOpacity>
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

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  back: {
    height: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
  },
  songTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25,
  },
  imageContainer: {
    marginTop: 20,
    height: 250,
  },
  albumImage: {
    flex: 1,
    height: 250,
    width: 250,
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

const QUEUEQUERY = gql`
  query songs {
  allQueues {
    name
    songses {
      title
      file {
        url
      }
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

export const withSongs = graphql(QUEUEQUERY);

export default withSongs(AudioPlayer);
