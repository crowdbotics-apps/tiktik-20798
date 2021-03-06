import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial5114764Navigator from '../features/Tutorial5114764/navigator';
import SignUp26114763Navigator from '../features/SignUp26114763/navigator';
import Tutorial4114759Navigator from '../features/Tutorial4114759/navigator';
import SignUp25114758Navigator from '../features/SignUp25114758/navigator';
import BlankScreen2114757Navigator from '../features/BlankScreen2114757/navigator';
import BlankScreen0114755Navigator from '../features/BlankScreen0114755/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial5114764: { screen: Tutorial5114764Navigator },
SignUp26114763: { screen: SignUp26114763Navigator },
Tutorial4114759: { screen: Tutorial4114759Navigator },
SignUp25114758: { screen: SignUp25114758Navigator },
BlankScreen2114757: { screen: BlankScreen2114757Navigator },
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
