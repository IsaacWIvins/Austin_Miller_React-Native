import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';


export default class AlbumsList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#726982',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
