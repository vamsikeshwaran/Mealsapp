import { FlatList, Text } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function presshandler() {
            navigation.navigate('MealOverview', {
                categoryId: itemData.item.id
            })
        }

        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={presshandler} />
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />
    )
}

export default CategoriesScreen