import { View , Text} from "react-native";

const Cashout = () => {
    return (
        <View className="flex-row mx-4 my-8 gap-1">
            <View className="flex-1 bg-gray-100 rounded-xl p-4 shadow-xl">
                <View className="h-40 bg-sky-400/50 rounded-xl" />
                <View className="mt-1">
                    <Text className="text-center text-lg font-semibold">Virtual Visa</Text>
                    <Text className="text-center">Starting from $1</Text>
                </View>
            </View>
        </View>
    );
}

export default Cashout;