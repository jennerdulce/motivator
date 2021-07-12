import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import Quote from './components/quote.js'
import Button from './components/buttons/button.js'
import Favorites from './components/buttons/favorites.js'
import FavoritesList from './components/favoritesList.js'
import { NativeRouter, Route } from "react-router-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}>
          <Provider store={store}>
            <Route exact path="/">
              <Quote />
              <Button />
              <Favorites />
            </Route>
            <Route path="/favorites">
              <FavoritesList />
            </Route>
          </Provider>
        </LinearGradient>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  }
});
