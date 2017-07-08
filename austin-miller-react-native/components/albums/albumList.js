import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import AlbumListItem from './albumListItem';
import { Austin } from "../../assets/austinData/austinData";


export default class AlbumsList extends React.Component {

  constructor(props) {

    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows ( Austin ),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Albums
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ ( album ) => <AlbumListItem album={ album } /> } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#111',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});
