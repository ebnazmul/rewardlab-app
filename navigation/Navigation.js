import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Earn from "../screens/Earn";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Earn" component={Earn}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                headerShown: false
            }} name="Main" component={StackNavigator} />
            <Tab.Screen name="Cashout" component={Earn}/>
            <Tab.Screen name="More" component={Earn}/>
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default Navigation;