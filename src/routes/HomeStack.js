import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GridScreen from '../screens/GridScreen';
import TableScreen from '../screens/TableScreen';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Grid" component={GridScreen} />
            <Stack.Screen name="Table" component={TableScreen} />
        </Stack.Navigator>
    );
}