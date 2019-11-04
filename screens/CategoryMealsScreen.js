import React from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id
          });
        }}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };
  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
