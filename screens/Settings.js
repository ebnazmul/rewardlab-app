import { View, Text, Pressable, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import Colors from "../configs/Colors";
import { useContext } from "react";
import { MainContext } from "../context/ContextProvider";

const Settings = () => {

    const { setUser, handleSignout } = useContext(MainContext)

    const signOut = async () => {
        Alert.alert(
            "Confirm Logout",
            "Are you sure you want to log out? Please note that having multiple accounts is not permitted under our terms of use.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Log Out",
                    onPress: async () => {
                        try {
                            await handleSignout();
                            setUser(null);
                        } catch (error) {
                            console.error("Error during logout:", error);
                        }
                    }
                }
            ],
            { cancelable: true }
        );
    };
    

    return (<View className="my-6 flex-1">
        <View className="mx-2 p-4 shadow rounded bg-white">
            <Pressable android_ripple={{ color: Colors.gray50 }} className="flex-row items-center gap-4 p-4 mb-2">
                <View className="w-6"><MaterialIcons size={24} name="star-rate" /></View>
                <Text className="text-lg">Rate Us</Text>
            </Pressable>
            <Pressable android_ripple={{ color: Colors.gray50 }} className="flex-row items-center gap-4 p-4 mb-2">
                <View className="w-6"><MaterialIcons size={24} name="privacy-tip" /></View>
                <Text className="text-lg">Privacy Policy</Text>
            </Pressable>
            <Pressable android_ripple={{ color: Colors.gray50 }} className="flex-row items-center gap-4 p-4 mb-2">
                <View className="w-6"><MaterialIcons size={24} name="policy" /></View>
                <Text className="text-lg">Terms & Conditions</Text>
            </Pressable>
            <Pressable onPress={signOut} android_ripple={{ color: Colors.gray50 }} className="flex-row items-center gap-4 p-4 mb-2">
                <View className="w-6"><MaterialIcons size={24} name="takeout-dining" /></View>
                <Text className="text-lg">Sign Out</Text>
            </Pressable>
        </View>
    </View>)
}

export default Settings;