import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn43114761Reducer from '../features/SignIn43114761/redux/reducers'
import SignUp25114758Reducer from '../features/SignUp25114758/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn43114761: SignIn43114761Reducer,
SignUp25114758: SignUp25114758Reducer,

});