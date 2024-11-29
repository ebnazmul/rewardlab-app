import { Linking, Text, View } from "react-native";
import ProfileOption from "../components/Profile/ProfileOption";
import Constants from "expo-constants"

const Profile = () => {
    return (
        <View>
            <View className="items-center">
                <View className="items-center mt-8 bg-white p-4 rounded-xl">
                    <View className="bg-sky-500 size-16 rounded-full" />
                    <Text className="text-center text-xl font-semibold">Nazmul Islam</Text>
                    <Text className="text-center">nazmulislam2322@gmail.com</Text>
                </View>
            </View>

            <View className="bg-white mx-4 mt-10 rounded-xl overflow-hidden">
                <ProfileOption onPress={()=> Linking.openURL("https://t.me/rewardlab")} icon="people" text="Join Community" />
                <ProfileOption icon="privacy-tip" text="Privacy Policy" />
                <ProfileOption icon="policy" text="Terms & Conditions" />
            </View>
            <View className="mt-10">
                <Text className='text-center'>{`v${Constants.expoConfig?.version}`}</Text>
            </View>
        </View>
    );
}

export default Profile;