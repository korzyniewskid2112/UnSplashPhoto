import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';


const TabsNavigation = () => {

    const Tabs = createBottomTabNavigator();

    return(
       <Tabs.Navigator initialRouteName='Home'>
           <Tabs.Screen name={'Home'} component={Home} options={{headerShown: false}} />
       </Tabs.Navigator>
    )
}

export default TabsNavigation;