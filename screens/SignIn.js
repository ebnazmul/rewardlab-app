import { View, Text, Alert } from "react-native";
import IconButton from "../components/Buttons/IconButton";
import Input from "../components/Input/Input";
import Submit from "../components/Auth/Submit";
import { useContext, useState } from "react";
import { MainContext } from "../context/ContextProvider";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { handleEmailPasswordLogin } = useContext(MainContext)


    async function handleLogin() {

        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
        }

        try {
            const update = await handleEmailPasswordLogin("111", "222")
            console.log(update);

        } catch (error) {
            console.log(error);
            Alert.alert("Error", "Please check your email and password properly.");
        }
    }

    return (
        <View>
            <View className="px-4 py-20">
                <View>
                    <IconButton onPress={() => navigation.goBack()} icon="arrow-back-sharp">Go Back</IconButton>
                </View>

                <View className="my-4 p-4 bg-gray-100 shadow-2xl rounded gap-1">
                    <Text className="text-2xl text-center">Log In</Text>
                    <View className="gap-4">
                        <Input setValue={setEmail} name="Email" />
                        <Input setValue={setPassword} name="Password" />
                        <Text className="text-sm">By signing up you agree to our terms & privacy policy.</Text>
                        <Submit onPress={handleLogin} name="Sign In" />
                        <Text className="text-center">OR</Text>
                        <IconButton fullWidth={true} icon="logo-google">Continue with Google</IconButton>
                    </View>
                </View>


            </View>
        </View>
    );
}

export default SignIn;