import { Pressable, Text, View, Image, StyleSheet } from "react-native"
import Admeal from "./Admeal"

function MealItem({ title, image, duration, complexity, afford, onPress }) {
    return (
        <View style={styles.mealitem}>
            <Pressable style={({ pressed }) => pressed ? { opacity: 0.70 } : null} onPress={onPress}>
                <View style={styles.innercontainer}>
                    <View>
                        <Image source={{ uri: image }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Admeal duration={duration} complexity={complexity} afford={afford} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealitem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8

    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailitem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    innercontainer: {
        borderRadius: 8,
        overflow: 'hidden'
    }
})