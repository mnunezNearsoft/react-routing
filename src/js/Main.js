import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
