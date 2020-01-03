import Home from './Pages/Home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Description from './Pages/Description';

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Description: Description,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);
