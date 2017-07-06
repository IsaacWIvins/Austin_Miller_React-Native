import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Player extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Audio Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a11da',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
