import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, SectionList } from 'react-native';

const extractKey = ({id}) => id;


export default class AlbumListItem extends React.Component {

  _renderSectionHeader = ({ section }) => {
    console.log("section", section)
    return (
      <View style={styles.dataSection}>
        <Text>
          {section.title}
        </Text>
      </View>
    )
  }

  _renderItems = ({ item }) => {
    console.log("item", item)
    return (
      <View style={styles.dataItem}>
        <Text>
          {item.title}
        </Text>
      </View>
    )
  }

  render() {
    const { album } = this.props;
    // console.log("album =============", album);
    return (
        <SectionList
          style={styles.container}
          sections={album}
          renderItem={this._renderItems}
          renderSectionHeader={this._renderSectionHeader}
          keyExtractor={extractKey}
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingTop: 20,
    paddingBottom: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  dataItem: {
    flex: 1,
    backgroundColor: 'white',
  },
  dataSection: {
    flex: 1,
    backgroundColor: 'rgb(135, 111, 230)',
  },
  artistName: {
    color: "#FFF",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 5
  },
  artistSongs: {
    color: "#CCC",
    backgroundColor: 'transparent',
    fontFamily: "Helvetica Neue",
    fontWeight: "300",
    fontSize: 14
  }
});
