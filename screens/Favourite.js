import { StyleSheet, View, Text } from "react-native"
import Meallist from "../components/Meallist/Meallist"
import { useContext } from "react"
import { FavouriteContext } from "../store/context/favourite-context"
import { MEALS } from "../data/dummy-data"

function Favourite() {
    const favouritemealcontext = useContext(FavouriteContext)
    const favouritemeals = MEALS.filter((meal) => favouritemealcontext.ids.includes(meal.id))
    if (favouritemeals.length === 0) {
        return (
            <View style={styles.rootcontainer}>
                <Text style={styles.text}>You hve no favorite meals yet</Text>
            </View>
        )

    }
    return (
        <Meallist items={favouritemeals} />
    )

}

export default Favourite

const styles = StyleSheet.create({
    rootcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})