import { Pressable, Text, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import Colors from "../configs/Colors";

const HeaderButton = ({ navigation }) => {

    return (<>
    <View className="rounded-md overflow-hidden">
        <Pressable disabled={true} className='bg-gray-700 flex-row items-center gap-2 px-4 py-2' onPress={() => navigation.navigate("Recharge")} android_ripple={{ color: Colors.gray50 }}>
            <FontAwesome5 name="coins" size={18} color={"gold"} />
            <Text className="text-xl text-gray-200 font-semibold">0 Points</Text>
        </Pressable>
    </View>

    <View className="rounded-full overflow-hidden">
        <Pressable onPress={() => navigation.navigate("Settings")} android_ripple={{ color: Colors.gray50 }} className='p-4'>
            <Ionicons name="settings" size={24} color={Colors.gray} />
        </Pressable>
    </View></>)
}

export default HeaderButton;