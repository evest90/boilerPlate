import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style = {Styles.containerStyle}>
      {props.children}
    </View>
  )
}

const Styles = StyleSheet.create({
  containerStyle : {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
});

export { CardSection };