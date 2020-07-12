import React from 'react';
import NavBar from '../../components/Nav/Nav'
import SidebarExampleTransitions from '../../components/SideBar/SideBar';
import axios from 'axios';
import faker from 'faker';
class View extends React.Component {
    state = { name: '', address: '' }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`).then(
            response => {
                this.setState({ name: response.data.name, address: response.data.address.suite });
            }
        )
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="ui grid">
                    <div className=" two wide column">
                        <SidebarExampleTransitions />
                    </div>
                    <div class="ui segment  fourteen wide column">
                        <div className="ui grid">
                            <img class="ui small left floated image" src={faker.image.avatar()}>
                            </img>
                            <p>{this.state.name}</p>
                            <p>{this.state.address} lorem100vdjbhjgvhfvbhjknkhgvhcvjhbknlnjkhvjgchgvhjbknlhgvjb m,mjhugvjb nm,kjuygvbnjuyughvbnjuytugfhvbnmkjuyiturydgxcvbnuytrydfcvhbnjuytuyfhgvbnjkiuyitufhcvnbnjuygh</p>
                        </div>
                        <br>
                        </br>
                        <br />
                        <div className="ui container">
                            defrgtfhjmhngfd
</div>
                    </div>
                    
                </div>
            </div>);
    }
}
export default View;
