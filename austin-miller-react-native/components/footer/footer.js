import React, { Component } from 'react'
import { AppRegistry, Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Footer extends Component {
  constructor(props){
    super(props)
  }

  _hitPress = () => {
    this.props.changer(0)
    this.props.navigation.navigate('OldAudio');
  }

  render() {
    // console.log("style props /////////////////////", this.props)
    // console.log("style state", this.state)
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
