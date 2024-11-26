import { Text, View } from "react-native";
import ProfileOption from "../components/Profile/ProfileOption";

const Profile = () => {
    return (
        <View>
            <View className="items-center">
                <View className="items-center mt-8 bg-white p-4 rounded-xl">
                    <View className="bg-sky-500 size-20 rounded-full" />
                    <Text className="text-center text-xl font-semibold">Nazmul Islam</Text>
                    <Text className="text-center italic">nazmulislam2322@gmail.com</Text>
                </View>
            </View>

            <View className="bg-white mx-4 mt-10 rounded-xl overflow-hidden">

                <ProfileOption icon="star" text="Join community" />
                <ProfileOption icon="star" text="Join community" />

            </View>
        </View>
    );
}

export default Profile;