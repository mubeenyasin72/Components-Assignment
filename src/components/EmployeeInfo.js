import React, { Component } from 'react';
import './EmployeeInfo.css';
class EmployeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <form >
                <h2>
                    This Is Employee Information Form
                </h2><br/>
                <label>
                    Enter FullName
                </label>
                <input type = "text" /><br/>
                <label>
                    Enter Email
                </label><br/>
                <input type = "email" /><br/>
                <label>
                    Enter Contact Number
                </label><br/>
                <input type = "number" /><br/>
                <label>
                    Enter Message
                </label>
                <textarea name = "message" /><br/>
                <input type = "submit" value = "send" />
            </form>
        </div>
        );
    }
}

export default EmployeeInfo;