import { View } from "react-native";

const Loading = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="size-20 bg-white shadow-2xl rounded items-center justify-center">
                <View className="size-10 border-x-4 border-t-4 border-sky-500 justify-center items-center rounded-full animate-spin" />
            </View>

        </View>
    );
}

export default Loading;