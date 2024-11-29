import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Initial from "../screens/Initial";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const Stack = createStackNavigator()

const InitialNavigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
                <Stack.Screen name="Initial" component={Initial} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default InitialNavigation;