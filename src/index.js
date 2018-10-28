import React from 'react';
import { render } from 'react-dom'
import Router from './router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducer from './redux/reducers/stroe'
import 'antd/dist/antd.css';
render(
    < Provider store={reducer} >
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider >
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
