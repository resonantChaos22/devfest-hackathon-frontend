import React from 'react';
import NavBar from '../../components/Nav/Nav'
import SidebarExampleTransitions from '../../components/SideBar/SideBar';
import axios from 'axios';
class View extends React.Component{
    render() {
        return (
            <div>
                <NavBar />
                <div className="ui grid">
                    <div className=" two wide column">
                        <SidebarExampleTransitions />
                        </div>
                </div>
                </div>
        );
}
}
export default View;