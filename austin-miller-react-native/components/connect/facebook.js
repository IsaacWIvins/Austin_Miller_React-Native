import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, Image, View, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'
import { SocialIcon } from 'react-native-elements'

export class Facebook extends Component {

  _renderImage = ({file, name}) => {
    const { url } = file
    return(
      <View key={name} style={styles.renderContainer}>
        <Image
          source={{uri: url}}
          resizeMode='cover'
          style={styles.coverIMG}>
            <SocialIcon
              title='Facebook'
              button
              type='facebook'
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
    opacity: .6,
    height: null,
    width: null,
  },
})

const FacebookQuery = gql`
  query tumblerImage {
    allImages(filter: {
      name: "MicNight"
    }) {
      name
      file {
        url
      }
    }
  }`;

  export const withQuery = graphql(FacebookQuery);

  export default withQuery(Facebook);
