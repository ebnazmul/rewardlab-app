import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({ children, onPress, icon }) => {
    return (
        <View className="flex-row">
            <Pressable android_ripple={{color: ""}} className="p-2 gap-1 border border-gray-700 flex-row items-center rounded" onPress={onPress}>
                <Ionicons name={icon} size={24} />
                <Text>{children}</Text>
            </Pressable>
        </View>
    );
}

export default IconButton;