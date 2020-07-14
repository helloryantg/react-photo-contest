import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
    <div className="NavBar">
        <div>
            <div>Like.</div>        
        </div>

        {!props.user ? 
            <div className="flexed_row_center right_side">
                <div>Contests</div>
                |
                <Link to='/login'>Login</Link>
                |
                <Link to='/signup'>Signup</Link>
            </div>
        :
            <div className="flexed_row_center right_side">
                <div>Contests</div>
                |
                <div>Hi, {props.user.name}!</div>
                |
                <Link to='' onClick={props.handleLogout}>Logout</Link>
            </div>
        }
    </div>
);

export default NavBar;