import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import MainBoardCust from './components/customer/MainBoardCust'
import MainBoardProv from './components/provider/MainBoardProv'
import ProviderDetails from './components/customer/ProviderDetails'
import SignIn from './components/auth/SignIn'
import CreateOwn from './components/provider/CreateOwn'
import QueuePage from './components/customer/QueuePage'
import OwnedQueue from './components/provider/OwnedQueue'


class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/queue/:id' component={QueuePage} />
            <Route exact path='/ownedQueue/:id' component={OwnedQueue} />
            <Route exact path='/' component={SignIn} />
            <Route path='/customerList/:id' component={ProviderDetails} />
            <Route path='/customer' component={MainBoardCust} />
            <Route path='/provider' component={MainBoardProv} />
            <Route path='/create' component={CreateOwn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
