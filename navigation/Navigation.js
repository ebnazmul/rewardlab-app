import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import Earn from "../screens/Earn";
import Home from "../screens/Home";
import Colors from "../configs/Colors";
import HeaderButton from "../utils/HeaderButton";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Cashout from "../screens/Cashout";
import Recharge from "../screens/Recharge";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.accent,
            },
            headerTitleStyle: {
                color: Colors.gray
            },
            headerTintColor: Colors.gray,
            animation: "fade_from_right"
        }}>
            <Stack.Screen
                options={({ navigation }) => ({
                    headerRight: () => <HeaderButton navigation={navigation} />
                })}
                name="Home" component={Home} />
            <Stack.Screen options={{
                animation: "slide_from_right",

            }} name="Settings" component={Settings} />
            <Stack.Screen options={{
                animation: "slide_from_right",

            }} name="Recharge" component={Recharge} />
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
            },
            tabBarActiveTintColor: Colors.secondary110,
            animation: "none"
        }}>
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />
            }} name="Main" component={StackNavigator}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate("Main", {
                            screen: "Home",
                        })
                    }
                })
                } />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="whatshot" size={size} color={color} />
            }} name="Earn" component={Earn} />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="gift" size={size} color={color} />
            }} name="Cashout" component={Cashout} />

            <Tab.Screen options={{
                tabBarIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />
            }} name="Profile" component={Profile} />


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