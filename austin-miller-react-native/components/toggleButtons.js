import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ToggleButton extends React.Component {

  renderItem = (item, index) => {
    const { value, onPressItem } = this.props;
    return(
      <TouchableOpacity
        style={[styles.button,
        {
          backgroundColor: item === value ? 'purple' : 'rgb(68, 16, 77)'
        }]}
        key={item}
        onPress={onPressItem.bind(this, item)}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  };

  render() {
  const {items, value} = this.props;
  return (
    <View style={styles.container}>
      {items.map(this.renderItem)}
    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'purple',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    margin: 10,
  }
});
