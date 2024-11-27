import { View, Text, Image, Pressable } from "react-native";

const Initial = () => {
    return (
        <View className="flex-1 justify-between pb-20 pt-40">
            <View>
                <View className="items-center">
                    <Image className="size-20 rounded-xl" resizeMode="contain" source={require("./../assets/images/logo.png")} />
                </View>

                <View className="mt-4 px-10">
                    <Text className="text-2xl font-semibold text-center">Earn in minutes</Text>
                    <Text className="text-lg text-center">and cash out through various payment methods!</Text>
                </View>
            </View>

            <View className="px-8 gap-1">
                <Pressable android_ripple={{color: ""}} className="bg-gray-900/95 py-4 rounded-xl">
                    <Text className='text-gray-200 text-center font-semibold text-xl tracking-wide'>Sign Up</Text>
                </Pressable>
                <Text className="text-center">OR</Text>
                <Pressable android_ripple={{color: ""}} className="bg-sky-500/95 py-4 rounded-xl">
                    <Text className='text-gray-200 text-center font-semibold text-xl tracking-wide'>Sign In</Text>
                </Pressable>
            </View>


        </View>
    );
}

export default Initial;