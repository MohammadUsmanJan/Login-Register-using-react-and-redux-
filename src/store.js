import {createStore , applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer , userRegisterReducer} from './reducers/userReducer'

const reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})


const initialState = {}


const middleware = [thunk];

const store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store;
