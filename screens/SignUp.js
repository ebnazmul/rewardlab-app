import {  View } from "react-native";
import IconButton from "../components/Buttons/IconButton";


const SignUp = ({navigation}) => {
    return (
        <View>
            <View className="px-4 py-20">
                <View>
                    <IconButton onPress={()=>navigation.goBack()} icon="arrow-back-sharp">Go Back</IconButton>
                </View>

            </View>
        </View>
    );
}

export default SignUp;