import React from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './Nav.css';

function Nav() {

    return(
        <nav>
            <div className="nav">
              <ul>
                <Link to='/'>
                  <li className="logoimg"></li>  
                </Link> 
                 <Link to='/'>
                    <li>HOME</li>
                </Link> 
                <Link to='/'>
                    <li>ABOUT US</li>
                </Link> 
                
                <Link to='/'>
                    <li>CONTACT US</li>
                </Link>
                  <li className="logout">
                  <div className="huge ui  inverted animated button" tabIndex="0">
                  <div className="visible content">LOG OUT</div>
                  <div className="hidden content"><Icon  name='sign-out' /></div>
                  </div>
                  </li>
                  
              </ul>
            </div>
            
           
            
        </nav>
        
        
    );
}

export default Nav;