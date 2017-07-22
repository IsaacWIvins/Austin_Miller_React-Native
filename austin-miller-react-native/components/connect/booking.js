import React, { Component } from 'react'
import { AppRegistry, ActivityIndicator, Image, View, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'

export class Booking extends Component {

  _renderImage = ({file, name}) => {
    const { url } = file
    return(
      <View key={name} style={styles.renderContainer}>
        <Image
          source={{uri: url}}
          resizeMode='cover'
          style={styles.coverIMG}>
            <View style={styles.contactContainer}>
              <Text style={styles.emailText}>austinmiller.booking@gmail.com</Text>
            </View>
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
    console.log("data", data)
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
    height: null,
    width: null,
  },
  contactContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailText: {
    color: 'white',
    paddingTop: 200,
    fontSize: 20,
    fontWeight: '500',
    backgroundColor: 'transparent',
  }
})

const BookingQuery = gql`
  query suaveImage {
    allImages(filter: {
      name: "Suave"
    }) {
      name
      file {
        url
      }
    }
  }`;

  export const withQuery = graphql(BookingQuery);

  export default withQuery(Booking);
