import { Text, View } from "react-native";
import InviteFriendLogo from "./InviteFriendLogo";

const InviteFriend = () => {
    return (
        <View className="p-4 bg-gray-100 shadow-md rounded-lg">
            <Text>Invite your friends to earn extra rewards 🥳</Text>
            <View className="mt-2 flex-row gap-2">
                <InviteFriendLogo uri="https://cdn-icons-png.flaticon.com/128/174/174848.png" />
                <InviteFriendLogo uri="https://cdn-icons-png.flaticon.com/128/174/174879.png" />
                <InviteFriendLogo uri="https://cdn-icons-png.flaticon.com/128/174/174876.png" />
                <InviteFriendLogo uri="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" />   
            </View>
        </View>
    )
}

export default InviteFriend;