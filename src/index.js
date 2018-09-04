import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import requireAuth from './hoc/requireAuth';
import reduxThunk from 'redux-thunk';



import App from './App';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';



const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={storeWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/add-user" component={AddUser} />
                    <Route path="/user/:id/edit" component={EditUser} />
                    <Route path="/user/:id" component={requireAuth(ViewUser)} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();


