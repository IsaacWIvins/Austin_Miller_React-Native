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

  _renderNavPage = (item) => {
    this.props.navigation.navigate('AlbumShow', { ...item });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ ( austin ) => <AlbumListItem _renderNavPage={this._renderNavPage} album= { austin } /> }/>
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
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});
