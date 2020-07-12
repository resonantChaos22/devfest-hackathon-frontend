import React from 'react';
class Prescription extends React.Component{
    render() {
        return (
            <form>
                <div className="ui inverted segment">
                <div className="ui inverted form">
                    <div className="inline field">
                        <label>
                            Name:
                        </label>
                        <input type="text" placeholder="Name"></input>
                        <label>Age:</label>
                        <input type="text" placeholder="Name"></input>
                        <label>Weight:</label>
                        <input type="text" placeholder="Name"></input>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}