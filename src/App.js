import React, { Component } from 'react';
import './App.css';
import C1 from './components/C1'

// polyfill for superagent & axios with IE11 usage
//require('es6-promise').polyfill()

//polyfills fecth for IE11 :: npm install --save isomorphic-fetch es6-promise
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  //Arrow functions :: (parameters) => { statements }

componentDidMount() {
  fetch('https://randomuser.me/api')
  .then(function(data) {
    console.log(data);
    })
  .catch(function(error) {
    console.log(error);
  });   
}

  /*
  componentDidMount() {
    console.log('componentDidMount:: start');
    agent.get('https://randomuser.me/api')
      .then(function (res) {
        this.setState({ user: res.body, mail: res.body.results[0].email });
        console.log('this.state');
        console.log(this.state);
        //console.log('res.body');
        //console.log(res.body);
        //console.log('this.state.user');
        //console.log(this.state.user.results[0].gender);
      }.bind(this));
  }
*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <C1 user={this.state.user} mail={this.state.mail}/>
        </header>
      </div>
    );
  }
}

export default App;
