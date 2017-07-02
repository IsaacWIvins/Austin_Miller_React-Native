import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ToggleButton extends React.Component {

  renderItem = (item, index) => {
    const { value, onPressItem } = this.props;
    return(
      <TouchableOpacity
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
    backgroundColor: 'purple',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  text: {
    color: 'black',
    fontSize: 24,
    margin: 10,
  }
});
