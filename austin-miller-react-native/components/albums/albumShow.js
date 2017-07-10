import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

const extractKey = ({id}) => id;

export default class AlbumShow extends React.Component {

  renderData = ({ item }) => {
    console.log("hello")
    console.log("item", item)
    return (
        <Text>{item.title}</Text>
    )

  }

  render() {
    const { albumImage, data, title, description } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{description}</Text>
          <FlatList
            data={data}
            style={styles.listContainer}
            renderItem={this.renderData}
            keyExtractor={extractKey}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#686273',
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
  }
});
