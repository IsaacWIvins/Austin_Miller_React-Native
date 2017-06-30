import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Views style={styles.placeHolderImg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  placeHolderImg: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: 'black'
  }
});
