import { View, Text, Image, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons"

const Cashout = ({ navigation }) => {

    return (
        <View className="flex-row mx-4 my-8 gap-1">
            <Pressable onPress={() => navigation.navigate("Main", { screen: "TopUp" })} android_ripple={{ color: "" }} className="flex-1 bg-gray-100 rounded-xl p-4 shadow-xl">
                <View className="h-20 bg-white rounded-xl items-center justify-center">
                    {/* <Text>Mobile Topup</Text> */}
                    <SimpleLineIcons size={24} name="energy" color={"#FFD99B"} />

                </View>
                <View className="mt-1">
                    <Text className="text-center text-lg font-semibold">Mobile Topup</Text>
                    <Text className="text-center">Starting from $1</Text>
                </View>
            </Pressable>

            <Pressable disabled={true} android_ripple={{ color: "" }} className="flex-1 bg-gray-100 rounded-xl p-4 shadow-xl opacity-30">
                <View className="h-20 bg-white rounded-xl items-center justify-center">
                    <Image source={require("./../assets/images/visa.png")} />
                </View>
                <View className="mt-1">
                    <Text className="text-center text-lg font-semibold">Virtual Visa</Text>
                    <Text className="text-center">Starting from $1</Text>
                </View>
            </Pressable>


        </View>
    );
}

export default Cashout;