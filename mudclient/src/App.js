import React, { Component } from 'react';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this._handleLogin = this._onLogin.bind(this);
  }

  render() {
    return (
      <div className="App container-fluid">
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    );
  }

  _onLogin(name, race, cls) {
  }
}

export default App;