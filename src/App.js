
import React, { Component } from "react";
import Tophead from './Tophead'
import Headerbc from "./Headerbc";
import Login from "./slogin";
import Register from "./Register";
import Profile from "./Profile";
import Extfan from "./Extfan";
import Extfridges from "./Extfridges";
import Extseall from "./images/Extseall.png"
import "./App.css";
import Footerem from "./Footerem";
import Subheaderbc from "./Subheaderbc";
import { Link, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Extorders from "./Extorders";
import Extphones from "./Extphones";
import Exthood from "./Exthood"
 



class App extends Component {
  render() {
    return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Register" component={Register} />
          <Route path="/fans" component = {Extfan}/>
          <Route path="/fridges" component = {Extfridges}/>
          <Route path="/seeall" component= {Extseall} />
          <Route path="/orders" component={Extorders} />
          <Route path="/Extphones" component={Extphones} />
          <Route path="/hoodie" component={Exthood} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
