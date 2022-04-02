import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Navbar, PLP, PDP, Cart, CheckOut } from 'pages';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { pathname: prevPathname } = prevProps.location;
    const { pathname } = this.props.location;
    if(prevPathname !== pathname) window.scrollTo(0, 0);
  }

  render() {
    return <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={PLP}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/checkout' component={CheckOut}/>
        <Route exact path='/products/:id' component={PDP}/>
        <Route exact path='/:category' component={PLP}/>
        <Redirect to='/'/>
      </Switch>
    </div>
  }
}

export default withRouter(App);