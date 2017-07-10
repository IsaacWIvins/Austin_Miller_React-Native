import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const extractKey = ({id}) => id;

export default class Shows extends React.Component {

  render() {
    return (
      <Text style={styles.text}>Shows Page</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});
