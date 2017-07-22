import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'

export default class Booking extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>BOOOKINGGGG</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})
