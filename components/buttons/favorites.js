import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../store/quoteBankReducer.js'
import { Link } from "react-router-native";


export default function Quote(props) {
  const dispatch = useDispatch()
  const quote = useSelector((state) => state.quoteBank.currentQuote)

  function favorites(q) {
    dispatch(addToFavorites(q))
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => favorites(quote)}>
        <Text style={styles.item}>ADD TO FAVORITES</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Link to="/favorites">
          <Text style={styles.item}>GO TO FAVORITES</Text>
        </Link>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20
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
    marginBottom: 2,
    marginLeft: 3,
    marginRight: 3
  }
});
