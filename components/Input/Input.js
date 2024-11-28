import { TextInput, View, Text } from "react-native";

const Input = ({ name, setValue }) => {
    return (
        <View className="gap-2">
            <Text className="text-xl">{name}</Text>
            <TextInput onChangeText={(val) => setValue(val)} className="border rounded text-xl px-2" placeholder={`Enter ${name === "Password" ? "a" : "your"} ${name.toLowerCase()}...`} secureTextEntry={name === "Password" && true} />
        </View>
    );
}

export default Input;