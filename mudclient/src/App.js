import React, { Component } from 'react';
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      
    );
  }
}

export default App;
