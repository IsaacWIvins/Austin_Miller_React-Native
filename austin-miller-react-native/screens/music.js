import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
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
  console.log("==== state", this.state.selectedMusic);
};

  render() {

    const { selectedMusic } = this.state

    return (
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
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726982',
  },
  mainTitle: {
    fontSize: 25,
    marginTop: 50,
    color: 'white',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  switchCase: {
    padding: 10,
  }
});
