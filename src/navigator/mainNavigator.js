import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn43114761Navigator from '../features/SignIn43114761/navigator';
import Tutorial4114760Navigator from '../features/Tutorial4114760/navigator';
import Tutorial4114759Navigator from '../features/Tutorial4114759/navigator';
import SignUp25114758Navigator from '../features/SignUp25114758/navigator';
import BlankScreen2114757Navigator from '../features/BlankScreen2114757/navigator';
import BlankScreen1114756Navigator from '../features/BlankScreen1114756/navigator';
import BlankScreen0114755Navigator from '../features/BlankScreen0114755/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn43114761: { screen: SignIn43114761Navigator },
Tutorial4114760: { screen: Tutorial4114760Navigator },
Tutorial4114759: { screen: Tutorial4114759Navigator },
SignUp25114758: { screen: SignUp25114758Navigator },
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
