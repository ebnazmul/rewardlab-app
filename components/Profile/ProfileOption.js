import { Ionicons } from "@expo/vector-icons"
import { Pressable, Text, View } from "react-native";
import Colors from "../../configs/Colors";

const ProfileOption = ({ icon, text }) => {
    return (
        <Pressable android_ripple={{ color: Colors.gray50 }} className="flex-row items-center px-4 py-6 gap-4 border-b border-gray-200">
            <View className="w-10"><Ionicons name={icon} size={24} color={Colors.secondary} /></View>
            <Text className="text-xl">{text}</Text>
        </Pressable>
    );
}

export default ProfileOption;