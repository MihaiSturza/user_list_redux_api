import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import AuthReducer from './auth';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    users: UsersReducer,
    form: formReducer,
    auth: AuthReducer
});

export default rootReducer;