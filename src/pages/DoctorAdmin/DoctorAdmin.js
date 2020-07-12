import React from 'react';
import NavBar from '../../components/Nav/Nav'
import SidebarExampleTransitions from '../../components/SideBar/SideBar';
import axios from 'axios';
import faker from 'faker';
import { Link } from 'react-router-dom';
class DoctorAAdmin extends React.Component {
    state = { data: [] };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({data:response})
            } )
        }
    renderList() {
        if (this.state.data.data === undefined)
        {
            return null;
        }
       return this.state.data.data.map(data=>{
           return (
               <div className="four wide column">
                <div className="ui card">
                    <div className="image">
                        <img src={faker.image.avatar()}>
                        </img>
                    </div>
                    <div className="content">
                           <Link to={`/view/${data.id}`} className="header">{data.name}</Link>
                        <div class="description">
                            Kristy is an art director living in New York.
                        </div>
                         </div>
                    <div class="extra content">
                        <a>
                            <i class="user icon"></i>
                        22 Friends
                        </a>
                    </div>
                    </div>
                   </div>
            );
        })    
        }
        

    render() {
        return (
            <div>
                <NavBar />
                <div className="ui grid">
                    <div className=" two wide column">
                        <SidebarExampleTransitions />
                    </div>
                    <div className="fourteen wide column" style={{ paddingTop: '60px' }}>
                        <div className="ui grid">
                            {this.renderList()} 
                            </div>
                    </div>
                    </div>
                </div>
        );
    }
}
export default DoctorAAdmin;