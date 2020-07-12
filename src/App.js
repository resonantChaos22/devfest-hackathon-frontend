import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import "semantic-ui-css/semantic.min.css";
import './App.css';

import TestPage from './pages/test-page/TestPage';
import WelcomeScreen from './pages/welcome-screen/WelcomeScreen';

export default () => {
    return (
        <div >
            
            <Router>
               <Preloader />
                <Route path="/test" exact component={TestPage} />
               
                
                   
            </Router>
        </div>
    );
};