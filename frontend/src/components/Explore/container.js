import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Explore from './presenter';

class Container extends Component{
    state={
        loading:true
    }
    static propTypes={
        getExplore:PropTypes.func.isRequired,
        userList:PropTypes.array
    }
    componentDidMount(){
        const {getExplore} =this.props;
        if(!this.props.userList){
            getExplore();
        }else{ //이미 API 요청이 되어진게 있으면 다시 API를 요청하지 않음
            this.setState({
                loading:false
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        if(nextProps.userList){
            this.setState({
                loading:false
            });
        }
    }
    render(){
        const {userList} = this.props;
        return <Explore {...this.state} userList={userList}/>
    }
}

export default Container;