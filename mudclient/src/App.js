import React, { Component } from 'react';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this._handleLogin = this._onLogin.bind(this);
  }

  render() {
    return (
      <div className="App container-fluid">
        <Login handleLogin={this._handleLogin} />
      </div>
    );
  }

  _onLogin(name, race, cls) {
  }
}

export default App;