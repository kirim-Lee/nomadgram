import React, {Component} from 'react';
import CommentBox from './presenter';

class Container extends Component {
    state={
        comment:""
    }
    render(){
        return (
            <CommentBox 
                handleInputChange={this._handleInputChange} 
                handleKeyPress = {this._handleKeyPress}
                {...this.state} 
                {...this.props}
            />)
    }
    _handleInputChange = (event) =>{
        const {target: {value}} = event;
        this.setState({
            comment:value
        })
    }
    _handleKeyPress = (event) =>{
        const {submitComment} = this.props
        const {key} = event;
        const {comment} = this.state
        if(key==="Enter"){
            event.preventDefault();
            this.setState({
                comment:""
            })
            submitComment(comment);
        }
    }
}

export default Container; 