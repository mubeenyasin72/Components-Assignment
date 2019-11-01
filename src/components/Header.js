import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {   
    render() {
        return (
            <div className = "Menustyle">
                <ul>
                    <li><Link to = "Home">Home</Link></li>
                    <li><Link to = "About">About</Link></li>
                    <li><Link to = "Contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;