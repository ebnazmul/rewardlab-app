import { TextInput, View, Text } from "react-native";

const Input = ({ name }) => {
    return (
        <View className="gap-2">
            <Text className="text-xl">{name}</Text>
            <TextInput className="border rounded text-xl px-2" placeholder={`Enter ${name === "Password" ? "a" : "your"} ${name.toLowerCase()}...`} />
        </View>
    );
}

export default Input;