import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import TabNavigator from './TabNavigator';
import CartScreen from '../screens/CartScreen';

export default function RootNavigator() {

    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen name="MainStack" component={TabNavigator} options={{ headerShown: false }} />
            <stack.Screen name="Details" component={DetailsScreen} options={{ title: "Details" }} />
            <stack.Screen name="CartMain" component={CartScreen} options={{ title: "Cart" }} />
        </stack.Navigator>
    );
}