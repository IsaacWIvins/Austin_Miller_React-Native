import React, { Component } from 'react'
import { ActivityIndicator, AppRegistry, View, ScrollView, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'

export class About extends Component {
  _renderArtist = ({ id, images, name, about }) => {
    console.log("====== id =======", id)
    console.log("====== name =======", name)
    console.log("====== images =======", images)
    console.log("====== about =======", about)
    return (
      <View key={id} style={styles.renderContainer}>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.imagesView}>
          <Text>{name}</Text>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>{about}</Text>
        </View>
      </View>
    )
  }
  render() {
    // console.log("=============", this.props)
    const { data } = this.props;
    const { allArtists, loading } = data

    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <View style={styles.infoContainer}>
        <ScrollView>
          {allArtists.map(this._renderArtist)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderContainer: {

  },
  nameView: {

  },
  nameText: {
    color: 'white',
  },
  aboutView: {

  },
  aboutText: {
    color: 'white',
  },
})

export const ARTIST_INFO_QUERY =
gql` query albums {
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
}`

export default graphql(ARTIST_INFO_QUERY)(About);
