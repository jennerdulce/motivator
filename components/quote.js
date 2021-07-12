import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import * as Speech from 'expo-speech';

export default function Quote() {
  const quote = useSelector((state) => state.quoteBank.currentQuote)
  function sayQuote() {
    Speech.speak(quote);
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => sayQuote()}>
        <Text style={styles.title}>{quote ? quote : 'MOTIVATOR'}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
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
