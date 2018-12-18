import React, { Component } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

class MainPage extends Component {

    render() {
        return (
            <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        )
    }    
}

export default MainPage;
