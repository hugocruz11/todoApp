import { createStackNavigator } from 'react-navigation';

import Index from '../Index';
import { AddItemScreen } from '../screens';

const StackApp = createStackNavigator(
  {
    Index: Index,
    AddItemScreen,
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  }
);

export default StackApp;
