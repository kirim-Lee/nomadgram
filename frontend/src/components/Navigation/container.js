import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Navigation from './presenter';

class Container extends Component{
    state = {
        termn:""
    }
    static propTypes = {
        goToSearch:PropTypes.func.isRequired
    }
    render(){
        return <Navigation
            {...this.state} 
            onInputChange={this._onInputChange} 
            onSubmit={this._onSubmit} />
    }
    _onInputChange = (event) => {
        const {target: {value}} = event;
        this.setState({
            termn:value
        })
    }
    _onSubmit = event =>{
        const {goToSearch} = this.props;
        const {termn} = this.state;
        event.preventDefault()
        goToSearch(termn)
        this.setState({
            termn:""
        })
    }
}

export default Container;