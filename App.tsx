import Home from './Pages/Home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
    Home: Home
});

export default createAppContainer(AppNavigator);
