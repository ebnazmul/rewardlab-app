import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({ children, onPress, icon, fullWidth, disabled }) => {
    return (
        <View className={`${!fullWidth ? "flex-row" : ""} ${disabled ? "opacity-30" : ""}`}>
            <Pressable disabled={disabled} android_ripple={{ color: "" }} className="p-2 gap-1 border border-gray-700 rounded" onPress={onPress}>
                <View className="flex-row items-center mx-auto">
                    <Ionicons name={icon} size={24} />
                    <Text>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default IconButton;