import { View, Text, Image } from 'react-native'

const Earn = () => {
    return (
        <View className="p-4 gap-2">
            <View className="w-full">
                <Image className="w-full" resizeMode='contain' source={require('./../assets/images/earn-with-offerwalls.png')} />
            </View>
            <View className="items-center border border-gray-500 rounded-lg py-4">
                <Text>More options are coming soon..</Text>
            </View>

        </View>
    )
}

export default Earn;