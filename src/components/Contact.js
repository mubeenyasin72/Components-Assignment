import React, { Component } from 'react';
import './Contact.css';
import InformationForm from './InformationForm';
class Contact extends Component {
    render() {
   //    alert('This Is Contact Page Called')
        return (
            <div className = "Contactstyle">

                <InformationForm/>
            </div>
        );
    }
}

export default Contact;