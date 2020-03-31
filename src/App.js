import React, { Component } from 'react';
import AppContent from './components/app-content'
import './App.css';
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Gustavo Castro',
        photo: 'https://avatars1.githubusercontent.com/u/37967122?v=4',
        login: 'athekes',
        repos: 12,
        followers: 10,
        following: 10.,
      },
      repos: [],
      starred: []
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos = {this.state.repos}
      starred = {this.state.starred}
      />
  }
}
  

export default App;
