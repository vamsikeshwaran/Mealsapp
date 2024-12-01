import { Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';

function Icon({ name, color, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={name} size={24} color={color} />
        </Pressable>
    )
}

export default Icon