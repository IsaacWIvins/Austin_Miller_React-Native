import React, { Component } from 'react'
import { AppRegistry, Animated, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'

export default class AudioPlayer extends Component {

  _handlePress = () => {
    this.props.changer(8)
    this.props.navigation.navigate('NewFooter');
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>Player</Text>
          <TouchableOpacity onPress={this._handlePress}>
            <View style={styles.back}>
              <Text>Back Button</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    height: 50,
    width: 100,
    padding: 20,
    backgroundColor: 'white',
  }
})
