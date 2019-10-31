import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FavoritesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FavoritesScreen;
