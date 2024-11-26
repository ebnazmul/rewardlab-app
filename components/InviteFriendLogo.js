import { View, Image } from "react-native";

const InviteFriendLogo = ({uri}) => {
    return (
        <View className="p-1 bg-white rounded-md shadow-2xl">
            <Image className="size-8" source={{uri}} />
        </View>
    );
}

export default InviteFriendLogo;