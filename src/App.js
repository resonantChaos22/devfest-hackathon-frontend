import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "semantic-ui-css/semantic.min.css";
import './App.css';

import TestPage from './pages/test-page/TestPage';
import WelcomeScreen from './pages/welcome-screen/WelcomeScreen';

export default () => {
    return (
        <div >
            
            <Router>
               
                <Route path="/test" exact component={TestPage} />
               
                
                   
            </Router>
        </div>
    );
};