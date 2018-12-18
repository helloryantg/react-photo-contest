import React, { Component } from 'react';
import './MainPage.css';
import NavBar from '../../components/NavBar/NavBar';

class MainPage extends Component {

    render() {
        return (
            <div className="MainPage">
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />
            </div>           
        )
    }    
}

export default MainPage;
