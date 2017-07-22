import React, { Component } from 'react'
import { ActivityIndicator, AppRegistry, View,Image, ScrollView, StyleSheet, Text } from 'react-native'
import { graphql, gql } from 'react-apollo'

export class About extends Component {

  _renderArtist = ({ id, images, name, about, style, recentInfo, influences }) => {

    const url_1969 = images[0].file.url
    const url_jammin = images[1].file.url
    const url_sunny65 = images[2].file.url
    const url_happyCamper = images[3].file.url
    const url_headshot = images[4].file.url

    return (
      <View key={id} style={styles.renderContainer}>

        <View style={styles.nameView}>
          <Text style={styles.nameText}>{name}</Text>
        </View>

        <Image
          source={{uri: url_headshot}}
          resizeMode='cover'
          style={styles.BGimage}>
          <View style={styles.aboutView}>
            <Image
              source={{uri: url_headshot}}
              style={styles.FrontIMG} />
            <Text style={styles.aboutText}>{about}</Text>
          </View>
        </Image>


        <Image
          source={{uri: url_sunny65}}
          resizeMode='cover'
          style={styles.BGimage}>
          <View style={styles.aboutView}>
            <Image
              source={{uri: url_sunny65}}
              resizeMode='cover'
              style={styles.FrontIMG} />
            <Text style={styles.aboutText}>{influences}</Text>
          </View>
        </Image>


        <Image
          source={{uri: url_happyCamper}}
          resizeMode='cover'
          style={styles.BGimage}>
          <View style={styles.aboutView}>
            <Image
              source={{uri: url_happyCamper}}
              resizeMode='cover'
              style={styles.FrontIMG} />
            <Text style={styles.aboutText}>{style}</Text>
          </View>
        </Image>


        <Image
          source={{uri: url_jammin}}
          resizeMode='cover'
          style={styles.BGimage}>
          <View style={styles.aboutView}>
            <Image
              source={{uri: url_jammin}}
              resizeMode='cover'
              style={styles.FrontIMG} />
            <Text style={styles.aboutText}>{recentInfo}</Text>
          </View>
        </Image>

      </View>
    )
  }
  render() {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameView: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  BGimage: {
    flex: 1,
    height: null,
    width: null,
  },
  FrontIMG: {
    height: 200,
    width: 200,
  },
  aboutView: {
    padding: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
  },
})

export const ARTIST_INFO_QUERY =
gql` query albums {
  allArtists {
    id
    name
    about
    influences
    recentInfo
    style
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
