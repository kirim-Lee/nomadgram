import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignupForm from './presenter';

class Container extends Component {
    state={
        email:"",
        fullname:"",
        username:"",
        password:""
    }
    static propTypes = {
        facebookLogin:PropTypes.func.isRequired,
        createAccount:PropTypes.func.isRequired
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
            handleFaceBookLogin={this._handleFaceBookLogin}
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
        const {createAccount} =this.props
        const {username, password, email, fullname} =this.state;
        event.preventDefault();
        //console.log(this.state);
        createAccount(username,password,email,fullname);
    }
    _handleFaceBookLogin = response =>{
        //console.log(response);
        const {facebookLogin} =this.props;
        facebookLogin(response.accessToken);
    }

}

export default Container;