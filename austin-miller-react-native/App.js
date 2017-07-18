import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import Tabs from './config/router'
import FooterStack from './config/footerRouter'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj51l581d7v7h0175nftbwyrx',
  }),
})

const $styles = (size) =>  StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
  },
  main: {
    flex: size,
  },
  footer: {
    flex: 1,
  }
})

export default class App extends Component {
  _changeState (size) {
    console.log("size", size)
    this.setState({
      size: size
    })
  }
  constructor(props){
    super(props)
    this.state = {
      size: 8
    };
  }
  render() {
    // console.log("root props", this.props)
    console.log("stat================", this.state)
    const styles = $styles(this.state.size);
    return (
      <ApolloProvider client={client}>
        <View style={styles.app}>
          <View style={styles.main}>
            <Tabs />
          </View>
          <View style={styles.footer}>
            <FooterStack screenProps={this._changeState.bind(this)}/>
          </View>
        </View>
      </ApolloProvider>
    )
  }
}



AppRegistry.registerComponent('App', () => App)
