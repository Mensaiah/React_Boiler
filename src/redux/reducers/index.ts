import { combineReducers } from "redux";
import { LOGOUT_SUCCESS } from 'redux/types';
import authReducer from "./auth";


const appReducer = combineReducers({
  auth: authReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;