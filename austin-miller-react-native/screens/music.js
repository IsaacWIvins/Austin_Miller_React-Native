import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, WebView } from 'react-native';
import ToggleButton from '../components/toggleButtons';

export default class Music extends React.Component {

  state = {
    selectedMusic: 'SONGS',
  }

  handlePressedItem = (item) => {
    console.log("item =====", item)
    this.setState({
      selectedMusic: item
    })
  };

  render() {

    const { selectedMusic } = this.state

    return (
      <View>
      <ScrollView style={styles.container}>
        <Text style={styles.mainTitle}>Austin Millers Music</Text>

        <View style={styles.switchRow}>
          <ToggleButton
            items={['SONGS', 'ALBUMS']}
            value={selectedMusic}
            onPressItem={this.handlePressedItem}
          />
      </View>
      </ScrollView>
      <View style={styles.content}>
        <WebView
          source={{uri: 'https://austinmiller.bandcamp.com/track/curse-the-road'}}
          style={{height: 100}}
        />
      </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(114, 117, 114)',
  },
  mainTitle: {
    fontSize: 25,
    marginTop: 50,
    color: '#00d95a',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white'
  }
});
