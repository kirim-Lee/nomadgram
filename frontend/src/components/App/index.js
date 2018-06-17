import {connect} from "react-redux";
import Container from './container';
import { withRouter } from 'react-router'

const mapStateToProps = (state,ownProps) => {
  const {user, routing : {location}} = state;
  return {
    isLoggedIn:user.isLoggedIn,
    pathname:location.pathname
  }
}


export default withRouter(connect(mapStateToProps)(Container));