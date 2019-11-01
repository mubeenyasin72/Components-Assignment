import React, { Component } from 'react';
import './About.css';
import EmployeeInfo from './EmployeeInfo';
class About extends Component {
    render() {
//        alert('This Is About Page Rander')
        return (
            <div className = "Aboutstyle">
                <EmployeeInfo/>
            </div>
        );
    }
}

export default About;