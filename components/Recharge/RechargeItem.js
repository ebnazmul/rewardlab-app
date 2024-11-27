import { Text, View, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../../configs/Colors";

const RechargeItem = () => {
    return (
        <View className="flex-row bg-gray-700 rounded">
                <Pressable className='flex-row items-center gap-2 px-4 py-4 rounded flex-1' onPress={() => navigation.navigate("Recharge")} android_ripple={{ color: Colors.gray50 }}>
                    <FontAwesome5 name="coins" size={18} color={"gold"} />
                    <Text className="text-xl text-gray-200 font-semibold">Buy 5000 Points</Text>
                </Pressable>
                <View className="justify-center bg-sky-500 px-4 py-2">
                    <Text className="text-xl text-gray-100">$0.99</Text>
                </View>
            </View>
    );
}

export default RechargeItem;