import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Initial from "../screens/Initial";

const Stack = createStackNavigator()

const InitialNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Initial" component={Initial} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default InitialNavigation;