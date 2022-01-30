import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhotoView from '../components/PhotoView';
import Search from '../components/Search';
import TabsNavigation from './TabsNavigation';

const MainScreens = () => {

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator initialRouteName={'Tabs'} screenOptions = {{headerShown: false}}>
            <Stack.Screen name={'Tabs'} component={TabsNavigation} />
            <Stack.Screen name={'Search'} component={Search} />
            <Stack.Screen name={'PhotoView'} component={PhotoView} />
        </Stack.Navigator>
    )
}

export default MainScreens;