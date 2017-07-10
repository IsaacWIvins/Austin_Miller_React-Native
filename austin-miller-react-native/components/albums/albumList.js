import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import AlbumListItem from './albumListItem';
import { Austin } from "../../assets/austinData/austinData";


export default class AlbumsList extends React.Component {

  constructor(props){
    super(props);

    let ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );

    this.state = {
      dataSource: ds.cloneWithRows( Austin ),
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
          renderRow={ ( austin ) => <AlbumListItem album= { austin } /> }/>
        {/* <AlbumListItem album= { Austin[0].albums } /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    color: 'white',
  }
});
