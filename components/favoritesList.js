import { StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-native";
import { deleteFromFavorites } from '../store/quoteBankReducer';
import * as Speech from 'expo-speech';



export default function FavoritesList(props) {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.quoteBank.favorites)

  function deleteQuote(id) {
    dispatch(deleteFromFavorites(id))
  }

  function sayQuote(quote) {
    Speech.speak(quote);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Quotes</Text>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View>
              <TouchableHighlight>
                <Text style={styles.item}>
                  {item.quote}
                </Text>
              </TouchableHighlight>
              <View style={styles.options}>
                <TouchableHighlight>
                  <Text style={styles.item} onPress={() => sayQuote(item.quote)}>
                    Play
              </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Text style={styles.item} onPress={() => deleteQuote(item.id)}>
                    Delete
              </Text>
                </TouchableHighlight>
              </View>
            </View>
          }
        />
      </ScrollView>
      <TouchableHighlight>
        <Link to="/">
          <Text style={styles.item}>Back</Text>
        </Link>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 20

  },
  item: {
    backgroundColor: 'black',
    borderRadius: 4,
    color: 'white',
    padding: 10,
    marginBottom: 5
  },
  scrollView: {
    marginHorizontal: 15,
    marginBottom: 10
  },
  options: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 20
  }
});
