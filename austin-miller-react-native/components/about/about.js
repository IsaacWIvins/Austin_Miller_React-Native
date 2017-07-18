import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'

export default class About extends Component {
  render() {
    return (
        <View style={styles.app}>
          <Text style={styles.text}>This is the About Page</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})
