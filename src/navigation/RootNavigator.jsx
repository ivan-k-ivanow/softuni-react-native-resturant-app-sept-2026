import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import TabNavigator from './TabNavigator';

export default function RootNavigator() {

    const stack = createStackNavigator();
    return (
        <stack.Navigator>
            <stack.Screen name="MainStack" component={TabNavigator} options={{ headerShown: false }} />
             <stack.Screen name="Details" component={DetailsScreen} options={{ title: "Details" }} />
        </stack.Navigator>
    );
}