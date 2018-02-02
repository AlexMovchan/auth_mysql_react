import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Home from './home/home';
import Header from './header/header';
import Mysql from './mysql/mysql';

const App = () => (
    <section>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/home" component={ Home }/>
            <Route exact path="/mysql" component={ Mysql }/>
        </Switch>,
    </section>
);

ReactDOM.render(
    <BrowserRouter className="container">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
