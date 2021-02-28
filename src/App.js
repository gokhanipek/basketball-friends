import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Nav from './Nav/Nav';
import Home from './Home/Home';
import FriendFinder from './FriendFinder/FriendFinder';
import MyProfile from './MyProfile/MyProfile';
import Footer from './Footer/Footer';



import FinalPage from './FinalPage';

import './App.scss';
class App extends Component {
  render(){
    return (
      <Router>
      <Nav home='Home' myProfile="My Profile" />
      <div>
        <Switch>
          <Route path="/friend-finder">
            {/* import corresponding component */}
            <FriendFinder />
          </Route>
          <Route path="/my-profile">
            <MyProfile />
          </Route>
          <Route path="/final-page">
            <FinalPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    );
  }
}

export default App;