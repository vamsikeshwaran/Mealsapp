import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";

function Meallist({ items }) {
    function renderMealItem(itemData) {
        const mealprops = {
            title: itemData.item.title,
            image: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            afford: itemData.item.affordability
        }
        return (
            <MealItem {...mealprops} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default Meallist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});