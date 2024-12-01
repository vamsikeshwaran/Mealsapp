import { View, Text, StyleSheet } from "react-native"
function Admeal({ duration, complexity, afford, style, textstyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailitem, textstyle]}>{duration}m</Text>
            <Text style={[styles.detailitem, textstyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailitem, textstyle]}>{afford.toUpperCase()}</Text>
        </View>
    )
}

export default Admeal

const styles = StyleSheet.create({
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
})
