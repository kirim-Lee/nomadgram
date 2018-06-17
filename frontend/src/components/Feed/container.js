import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Feed from './presenter';

class Container extends Component{
    state={
        loading:true
    }
    static propTypes={
        getFeed:PropTypes.func.isRequired
    }
    componentDidMount(){
        const {getFeed} =this.props;
        if(!this.props.feed){
            getFeed();
        }else{ //이미 API 요청이 되어진게 있으면 다시 API를 요청하지 않음
            this.setState({
                loading:false
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        if(nextProps.feed){
            this.setState({
                loading:false
            });
        }
    }
    render(){
        const {feed} = this.props;
        return <Feed {...this.state} feed={feed}/>
    }
}

export default Container;