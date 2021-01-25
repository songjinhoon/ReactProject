import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './modules/index';
import { createLogger } from 'redux-logger';
import { checkUser, tempSetUser } from './modules/user';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

function loadUser(){
    try{
        const user = localStorage.getItem('user');
        if(!user) return ;
        store.dispatch(tempSetUser(user));
        store.dispatch(checkUser());
    }catch(e){
        console.log('localStorage is not working');
    }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();