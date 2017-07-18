import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList } from 'react-native'

// import gql from 'graphql-tag';
import { graphql, gql  } from 'react-apollo';


export class AlbumsListData extends Component {


  _handlePress = ( albumName ) => {
    // console.log("================== NAV PROPS ================", this.props)
    console.log("Pressed: ", albumName)
    this.props.navigation.navigate('SongsList', { albumName });
  }

  _renderItem = ({ id, name, image}) => {
    const { url } = image.file;
    return (
      <View key={id}>
        <TouchableHighlight onPress={() => this._handlePress(name)}>
          <Image
            source={{uri: url}}
            resizeMode='cover'
            style={styles.coverIMG}>
            <View style={styles.coverContainer}>
              <Text style={styles.name}>{name}</Text>
            </View>
          </Image>
        </TouchableHighlight>
        <StatusBar barStyle="light-content" />
      </View>
    )
  }

  render() {
    // console.log("================== NAV PROPS ================", this.props)
    const {data} = this.props
    const {loading, allAlbums} = data
    if (loading) {
      return <ActivityIndicator />
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {allAlbums.map(this._renderItem)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#111',
  },
  coverIMG: {
    flex: 1,
    height: null,
    width: null,
  },
  coverContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 60,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  name: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
},
})

const ALBUMQUERY = gql`
  query albums {
    allAlbums {
      id
      name
      description
      artistName
      image {
        name
        file {
          url
        }
      }
    }
  }`;

export const withAlbum = graphql(ALBUMQUERY);

export default withAlbum(AlbumsListData);
