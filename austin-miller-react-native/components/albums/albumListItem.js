import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';
import AlbumShow from './albumShow';

const extractKey = ({id}) => id;

export default class AlbumListItem extends React.Component {

  handlePress = (item) => {

    // console.log("working album ALBUMLISTITEM =====", item)
    // console.log("this.props", this.props);
    this.props._renderNavPage(item)

  }

  render() {
    const { album } = this.props;
    return (
        <TouchableHighlight
          onPress={() => this.handlePress(album)}>
          <Image
            resizeMode='cover'
            style={styles.imageBG}
            source={{uri: "https://f4.bcbits.com/img/a2875020553_16.jpg"}}>
            <View style={styles.container}>
              <Text style={styles.title}>{album.title}</Text>
              <Text style={styles.length}>{album.data.length} Tracks</Text>
            </View>
          </Image>
        </TouchableHighlight>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  length: {
  color: "#CCC",
  backgroundColor: 'transparent',
  fontFamily: "Helvetica Neue",
  fontWeight: "300",
  fontSize: 14
  }
});
