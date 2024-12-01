import { View, Text, FlatList, Image, StyleSheet, ScrollView, Button } from "react-native"
import { MEALS } from "../data/dummy-data"
import Admeal from "../components/Admeal"
import { useLayoutEffect, useContext } from "react"
import Icon from "../components/Icon"
import { FavouriteContext } from "../store/context/favourite-context"


function MealDetailsScreen({ route, navigation }) {
    const favmealcontext = useContext(FavouriteContext)
    const mId = route.params.categoryId
    const mealdet = MEALS.find((meal) => meal.id === mId)
    const mealisfavourite = favmealcontext.ids.includes(mId)
    function changefavourite() {
        if (mealisfavourite) {
            favmealcontext.removefavourite(mId)
        } else {
            favmealcontext.addfavourite(mId)
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Icon name={mealisfavourite ? 'star' : 'star-outline'} color="white" onPress={changefavourite} />
            }
        })
    }, [navigation, changefavourite])
    return (
        <ScrollView style={{ marginBottom: 32 }}>
            <View>
                <Image style={styles.image} source={{ uri: mealdet.imageUrl }} />
                <Text style={styles.title}>{mealdet.title}</Text>
                <Admeal duration={mealdet.duration} complexity={mealdet.complexity} afford={mealdet.affordability} textstyle={styles.detailtext} />
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '80%' }}>
                        <View style={styles.subcontainer}>
                            <Text style={styles.subtitle}>INGREDIENTS</Text>
                        </View>

                        {mealdet.ingredients.map((ingredient) =>
                            <View style={styles.listitem}>
                                <Text style={styles.itemtext} key={ingredient}>{ingredient}</Text>
                            </View>
                        )}

                        <View style={styles.subcontainer}>
                            <Text style={styles.subtitle}>STEPS</Text>
                        </View>

                        {mealdet.steps.map((step) =>
                            <View style={styles.listitem}>
                                <Text style={styles.itemtext} key={step}>{step}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

export default MealDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailtext: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    subcontainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    listitem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemtext: {
        color: '#351401',
        textAlign: 'center',
    }
})