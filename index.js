import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import PersonList from './Components/PersonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Carsten'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Lese hier die Benutzerdaten von <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a> via REST-Call aus :)
        </p>
        <PersonList />
      </div>      
    );
  }
}

render(<App />, document.getElementById('root'));
