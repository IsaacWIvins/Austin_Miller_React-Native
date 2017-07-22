import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'

export class About extends Component {
  render() {
    console.log("=============", this.props)
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

export const ARTIST_INFO_QUERY = gql`
  query albums {
    allArtists {
      id
      name
      about
      images {
        file {
          name
          url
        }
      }
      albums {
  			name
    		image {
          file {
  					url
          }
        }
      }
    }
  }
`

export default graphql(ARTIST_INFO_QUERY)(About);
