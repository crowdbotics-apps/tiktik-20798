import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2114757Navigator from '../features/BlankScreen2114757/navigator';
import BlankScreen1114756Navigator from '../features/BlankScreen1114756/navigator';
import BlankScreen0114755Navigator from '../features/BlankScreen0114755/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2114757: { screen: BlankScreen2114757Navigator },
BlankScreen1114756: { screen: BlankScreen1114756Navigator },
BlankScreen0114755: { screen: BlankScreen0114755Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
