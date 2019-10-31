import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Categories = props => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
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

export default Categories;
