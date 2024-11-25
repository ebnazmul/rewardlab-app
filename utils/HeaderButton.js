import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import Colors from "../configs/Colors";

const HeaderButton = ({ navigation }) => {

    return (<View className="rounded-full overflow-hidden">
        <Pressable onPress={() => navigation.navigate("Settings")} android_ripple={{ color: Colors.gray50 }} className='p-4'>
            <Ionicons name="settings" size={24} color={Colors.gray} />
        </Pressable>
    </View>)
}

export default HeaderButton;