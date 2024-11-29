import { View, Text, Alert } from "react-native";
import IconButton from "../components/Buttons/IconButton";
import Input from "../components/Input/Input";
import Submit from "../components/Auth/Submit";
import { useContext, useState } from "react";
import { MainContext } from "../context/ContextProvider";
import { save } from "../utils/SaveAndGet";
import SubmitLoading from "../components/Auth/SubmitLoading";

const SignUp = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { handleEmailPasswordSignup } = useContext(MainContext)
    const [authLoading, setAuthLoading] = useState(false)

    async function handleSignUp() {

        if (!name || !email || !name) {
            Alert.alert('Error', "You must fill all the information to Sign Up.")
            return;
        }

        setAuthLoading(true)

        try {
            const update = await handleEmailPasswordSignup(email, password)
            await save('token', update.user.accessToken)
        } catch (error) {
            Alert.alert('Error', "Something went wrong with the Sign Up process.")
        }

        setAuthLoading(false)
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
                        {!authLoading ? <Submit onPress={handleSignUp} name="Sign Up" /> : <SubmitLoading />}
                        <Text className="text-center">OR</Text>
                        <IconButton disabled={true} fullWidth={true} icon="logo-google">Continue with Google</IconButton>
                    </View>
                </View>


            </View>
        </View>
    );
}

export default SignUp;