import React, { Component } from 'react'
import {
  AppRegistry,
  Animated,
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  TouchableOpacity } from 'react-native'
import { graphql, gql  } from 'react-apollo';

export class Footer extends Component {
  constructor(props){
    super(props)
  }

  _hitPress = () => {
    this.props.changer(0)
    this.props.navigation.navigate('OldAudio');
  }

  render() {
    // console.log(" props /////////////////////", this.props)
    console.log(" state", this.state)
    const { data } = this.props
    const {loading, allQueues} = data
    console.log(" data /////////////////////", data)
    console.log(" loading /////////////////////", loading)
    console.log(" allQueues /////////////////////", allQueues)

    if (loading) {
      return <ActivityIndicator />
    }

    return (
        <View style={styles.footer}>
          <TouchableOpacity onPress={this._hitPress}>
            <Text style={styles.footerText}>Hit Me</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: '#333'
  },
  footerText: {
    color: 'white'
  }
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
