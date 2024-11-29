import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native";
import Colors from "../../configs/Colors";

const ProfileOption = ({ icon, text, onPress }) => {
    return (
        <Pressable onPress={onPress} android_ripple={{ color: Colors.gray50 }} className="flex-row items-center p-4 gap-4 border-b border-gray-200">
            <View className="w-10"><MaterialIcons name={icon} size={24} color={Colors.secondary} /></View>
            <Text className="text-xl">{text}</Text>
        </Pressable>
    );
}

export default ProfileOption;