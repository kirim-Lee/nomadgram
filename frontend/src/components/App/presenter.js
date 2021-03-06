import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route,Switch} from "react-router-dom";
import './styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';

class App extends Component{
  static propTypes={
    isLoggedIn:PropTypes.bool.isRequired
  }
  render(){
    const {isLoggedIn} = this.props;
    return (
      <div>
      {isLoggedIn && <Navigation key={1} />}
      {isLoggedIn ? <PrivateRoutes key={2} /> :<PublicRoutes key={2} />}
      <Footer key={3}/>
      </div>
    )
  }
}
/*const App = props => [
  props.isLoggedIn && <Navigation key={1} />,
  props.isLoggedIn ? <PrivateRoutes key={2} /> :<PublicRoutes key={2} />, 
  <Footer key={3}/>
]*/

/*App.propTypes ={
  isLoggedIn:PropTypes.bool.isRequired
}*/

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/search/:searchTerm" component={Search} />
  </Switch>
)

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forgot" render={()=>"password"} />
  </Switch>
)

export default App;
