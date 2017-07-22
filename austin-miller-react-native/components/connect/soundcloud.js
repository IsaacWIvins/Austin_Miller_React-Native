import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, Image, View, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo';

export class Soundcloud extends Component {
  render() {
    // console.log("this.props: ", this.props)
    const { data } = this.props
    const { loading, allImages } = data
    if (loading) {
      return <ActivityIndicator />
    }
    console.log("allImages", allImages)
    return (
        <View style={styles.container}>
          <Text style={styles.text}>This is the SOUNDCLOUD Page</Text>
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

const TumblerQuery = gql`
  query tumblerImage {
    allImages(filter: {
      name: "Tumbler"
    }) {
      name
      file {
        url
      }
    }
  }`;

export const withAlbum = graphql(TumblerQuery);

export default withAlbum(Soundcloud);
