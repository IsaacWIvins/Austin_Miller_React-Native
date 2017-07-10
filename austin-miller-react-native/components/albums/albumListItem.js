import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image } from 'react-native';

const extractKey = ({id}) => id;

export default class AlbumListItem extends React.Component {

  _onPress = () => {
    console.log("pressed this.props.album.title", this.props.album.title);
    console.log("this.props.album.data.length", this.props.album.data.length);
    console.log("this.props.album.albumImage", this.props.album.albumImage);
  }

  render() {
    // console.log("props ========", this.props)
    const imagePath = this.props.album.albumImage;
    // const imageUri = 'file://' + imagePath;
    return (
        <TouchableHighlight
          onPress={this._onPress}>
          <Image
            resizeMode='cover'
            style={styles.imageBG}
            source={{uri: "https://f4.bcbits.com/img/a2875020553_16.jpg"}}>
            <View style={styles.container}>
              <Text style={styles.title}>{this.props.album.title}</Text>
              <Text style={styles.length}>{this.props.album.data.length} Tracks</Text>
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
