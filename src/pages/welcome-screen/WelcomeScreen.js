import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

export default () => {
    return (
         <div className="whole">
    <div className="ui top attached tabular menu nav">
                <div>
                    Logo
                     </div>
                <div className="right menu">
                    <div className="ui buttons">
                        <button className="ui button">
                          <a href="#" > Sign in as Doctor </a>
                        </button>
                        <div className="or"></div>
                        <button className="ui negative button btn">
                            <a href="#" style={{color:'white'}}>Sign in as Patient</a>
                        </button>
                 </div>
                </div>
            </div>
            
        </div>
    );
};