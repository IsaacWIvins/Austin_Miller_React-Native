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

  _renderFooter = ({ title }, i) => {
    console.log(" title /////////////////////", title)
    console.log(" i //////////////////", i)
    return(
      <View style={styles.renderView}>
          <Text style={styles.footerText}>Hit Me</Text>
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
        {allQueues.map( ({songses}) => { songses.map(this._renderFooter)})}
      </TouchableOpacity>
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
  renderView: {
    flex: 1,
    backgroundColor: 'rgb(29, 216, 235)'
  },
  footerText: {
    backgroundColor: 'white',
    fontSize: 30,
    color: 'white',
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
