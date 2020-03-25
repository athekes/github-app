import React, { Component } from 'react';
import AppContent from './components/app-content'
import './App.css';
import Repos from './components/repos';

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinf: null,
      repos: [],
      starred: []
    }
  }

  render () {
    return <AppContent
      userInfo={this.state.userinfo}
      repos = {this.state.repos}
      starred = {this.state.starred}
      />
  }
}
  

export default App;
