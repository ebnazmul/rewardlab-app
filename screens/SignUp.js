import { View, Text, Alert } from "react-native";
import IconButton from "../components/Buttons/IconButton";
import Input from "../components/Input/Input";
import Submit from "../components/Auth/Submit";
import { useContext, useState } from "react";
import { MainContext } from "../context/ContextProvider";
import { get, save } from "../utils/SaveAndGet";


const SignUp = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { handleEmailPasswordSignup } = useContext(MainContext)

    async function handleSignUp() {
        if (!name || !email || !name) {
            Alert.alert('Error', "You must fill all the information to Sign Up.")
        }

        try {
            const update = await handleEmailPasswordSignup(email, password)
            console.log(update.user.accessToken);
            const res = await save('token', update.user.accessToken)
            console.log(res);

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <View>
            <View className="px-4 py-20">
                <View>
                    <IconButton onPress={() => navigation.goBack()} icon="arrow-back-sharp">Go Back</IconButton>
                </View>

                <View className="my-4 p-4 bg-gray-100 shadow-2xl rounded gap-1">
                    <Text className="text-2xl text-center">Create new Account</Text>
                    <View className="gap-4">
                        <Input setValue={setName} name="Name" />
                        <Input setValue={setEmail} name="Email" />
                        <Input setValue={setPassword} name="Password" />
                        <Text className="text-sm">By signing up you agree to our terms & privacy policy.</Text>
                        <Submit onPress={handleSignUp} name="Sign Up" />
                        <Text className="text-center">OR</Text>
                        <IconButton disabled={true} fullWidth={true} icon="logo-google">Continue with Google</IconButton>
                    </View>
                </View>


            </View>
        </View>
    );
}

export default SignUp;