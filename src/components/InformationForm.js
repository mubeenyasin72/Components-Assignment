import React, { Component } from 'react';
import './InformationForm.css'
class InformationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:" Mubeen Yaseen",
            email:"abc@gmail.com",
            contact:"03432275634",
            comment:"Concentrate on youur target."
    };
    }
   /* handlename = (event)=>
    {
        this.setState({username: event.target.value})
    }
    handleemail = (event)=>
    {
        this.setState({email: event.target.value})
    }
       handlenumber = (event)=>
    {
        this.setState({contact: event.target.value})
    }
        handlecomment = (event)=>
    {
        this.setState({comment: event.target.value})
    }*/
    handlechangeall = (event)=>
    {
        this.setState({[event.target.name] :event.target.value})
    }
    handlesubmit =(event)=>{
     /*   alert(` 
        My name IS ${this.state.username}.
        My Email Is ${this.state.email}.
        My Contact Number Is That ${this.state.contact}.
        My Message Is That ${this.state.comment}
        `);*/
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <h2>
                        This Is Personal Information Form
                    </h2><br/>
                    <label>
                        Enter FullName
                    </label>
                    <input type = "text" name = "username" value={this.state.username}
                    onChange={this.handlechangeall}/><br/>
                    <label>
                        Enter Email
                    </label>
                    <input type = "email" name = "email" value={this.state.email}
                    onChange={this.handlechangeall}/><br/>
                    <label>
                        Enter Contact Number
                    </label><br/>
                    <input type = "number" name = "contact" value={this.state.contact}
                    onChange={this.handlechangeall}/><br/>
                    <label>
                        Enter Message
                    </label>
                    <textarea name = "message" value={this.state.comment}
                    onChange={this.handlechangeall}/><br/>
                    <input type = "submit" value = "send" />
                </form>
            </div>
        );
    }
}

export default InformationForm;