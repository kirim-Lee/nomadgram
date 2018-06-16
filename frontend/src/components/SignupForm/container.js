import React, {Component} from 'react';
import SignupForm from './presenter';

class Container extends Component {
    state={
        email:"",
        fullname:"",
        username:"",
        password:""
    }
    render(){
        const {email,fullname,username,password} = this.state;
        return <SignupForm 
            emailValue={email}
            nameValue={fullname}
            usernameValue={username}
            passwordValue={password}
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
        />;
    }
    _handleInputChange= event =>{
        const {target:{name, value}} = event;
        console.log(name,value)
        this.setState({
            [name]:value
        });
    }
    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

}

export default Container;