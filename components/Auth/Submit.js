import { Pressable, Text } from "react-native";

const Submit = ({ onPress, name }) => {
    return (
        <Pressable onPress={onPress} android_ripple={{color: ""}} className="bg-gray-900 py-3 rounded-xl">
            <Text className="text-gray-200 text-center font-semibold text-xl tracking-wide">{name}</Text>
        </Pressable>
    );
}

export default Submit;