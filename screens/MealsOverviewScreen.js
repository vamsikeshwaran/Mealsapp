import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })

    }, [catId, navigation])

    function renderMealItem(itemData) {
        function presshandle() {
            navigation.navigate('MealDetails', {
                categoryId: itemData.item.id
            })
        }
        const mealprops = {
            title: itemData.item.title,
            image: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            afford: itemData.item.affordability
        }
        return (
            <MealItem {...mealprops} onPress={presshandle} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
