import React, {Component} from 'react';
import LoginForm from './presenter';


class Container extends Component{
    state = {
        username:"",
        password:""
    }
    render(){
        const {username, password} = this.state;
        return <LoginForm 
            handleInputChange={this._handleInputChange} 
            handleSubmit={this._handleSubmit}
            handleFaceBookLogin={this._handleFaceBookLogin}
            usernameValue={username} 
            passwordValue={password} 
        />;
    }
    _handleInputChange = event => {
        const {target:{name,value}} = event;
        this.setState({
            [name]:value
        });
    }
    _handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    _handleFaceBookLogin= response =>{
        console.log(response)
    }
}

export default Container;
