import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import InfoScreen from '../screens/InfoScreen';
import { Ionicons } from "@expo/vector-icons";

// Rename the default export to match the function name

export default function TabNavigator() {

    const Tabs = createBottomTabNavigator();
    // const Tabs = createNativeBottomTabNavigator();

    return (
        <>
            <Tabs.Navigator>
                <Tabs.Screen
                    name="HomeTab"
                    component={HomeNavigator}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Ionicons name="restaurant" color={color} size={size} />
                    }}
                />

                <Tabs.Screen
                    name="CartTab"
                    component={CartNavigator}
                    options={{ 
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Ionicons name="cart" color={color} size={size} />
                    }}
                />

                <Tabs.Screen
                    name="Info"
                    component={InfoScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />
                    }}
                />
            </Tabs.Navigator>
        </>
    );
}