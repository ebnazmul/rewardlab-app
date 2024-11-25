import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons"
import Earn from "../screens/Earn";
import Home from "../screens/Home";
import Colors from "../configs/Colors";
import HeaderButton from "../utils/HeaderButton";
import Settings from "../screens/Settings";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.accent,
            },
            headerTitleStyle: {
                color: Colors.gray
            },
            headerTintColor: Colors.gray
        }}>
            <Stack.Screen
                options={({ navigation }) => ({
                    headerRight: () => <HeaderButton navigation={navigation} />
                })}
                name="Home" component={Home} />
            <Stack.Screen options={{
                animation: "slide_from_right",
                
            }} name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.accent,
            },
            headerTitleStyle: {
                color: Colors.gray
            }
        }}>

            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />
            }} name="Main" component={StackNavigator} />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="whatshot" size={size} color={color} />
            }} name="Earn" component={Earn} />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="wallet-giftcard" size={size} color={color} />
            }} name="Cashout" component={Earn} />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />
            }} name="Profile" component={Earn} />


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