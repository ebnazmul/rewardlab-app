import { Image, Pressable } from "react-native";

const InviteFriendLogo = ({uri}) => {
    return (
        <Pressable className="p-1 bg-white rounded-md shadow-2xl">
            <Image className="size-8" source={{uri}} />
        </Pressable>
    );
}

export default InviteFriendLogo;