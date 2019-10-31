import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Button
        title="Go back to top"
        onPress={() => props.navigation.popToTop()}
      />
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

export default MealDetailScreen;
