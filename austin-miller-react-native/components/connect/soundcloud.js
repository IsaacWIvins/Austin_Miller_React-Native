import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, Image, View, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'
import { SocialIcon } from 'react-native-elements'

export class Soundcloud extends Component {

  _renderImage = ({file, name}) => {
    const { url } = file
    return(
      <View key={name} style={styles.renderContainer}>
        <Image
          source={{uri: url}}
          resizeMode='cover'
          style={styles.coverIMG}>
            <SocialIcon
              title='SoundCloud'
              button
              type='soundcloud'
            />
          </Image>
      </View>
    )
  }

  render() {
    const { data } = this.props
    const { loading, allImages } = data
    if (loading) {
      return <ActivityIndicator />
    }
    return (
        <View style={styles.container}>
          {allImages.map(this._renderImage)}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  renderContainer: {
    flex: 1,
  },
  coverIMG: {
    flex: 1,
    opacity: .7,
    height: null,
    width: null,
  },
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
