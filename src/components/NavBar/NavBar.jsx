import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
    <div className="NavBar">
        <div>
            <button>Like.</button>        
        </div>

        <div>
            <button>Contests</button>
            <button>{props.user.name}</button>
            <button></button>
        </div>
        
        {props.user ? 
            <div>
                <Link to='/logout'>Logout</Link> 
                <div>User not present</div>
            </div>
        :
            <div>
                <Link to='/login'>Login</Link>
                <div>User present</div>
            </div>
        }
        {/* <Link to='/signup'>Signup</Link> */}

    </div>
);

export default NavBar;