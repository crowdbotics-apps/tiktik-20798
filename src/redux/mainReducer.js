import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp26114763Reducer from '../features/SignUp26114763/redux/reducers'
import SignUp25114758Reducer from '../features/SignUp25114758/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp26114763: SignUp26114763Reducer,
SignUp25114758: SignUp25114758Reducer,

});