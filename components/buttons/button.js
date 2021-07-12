import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getQuote } from '../../store/quoteBankReducer.js'

export default function Quote() {
  const dispatch = useDispatch()
  function quote(){
    dispatch(getQuote())
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => quote()}>
        <Text style={styles.item}>NEW QUOTE</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 5

  },
  item: {
    backgroundColor: 'black',
    borderRadius: 4,
    color: 'white',
    padding: 10,
    marginBottom: 2
  }
});
