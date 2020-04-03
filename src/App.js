import React, { Component } from 'react';
import AppContent from './components/app-content'
import './App.css';
const axios = require('axios');
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }
  
  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    
    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${value}`)
      .then((response) => {
        console.log(response)
        this.setState({
          userinfo: {
            username: response.data.name,
            photo: response.data.avatar_url,
            login: response.data.login,
            repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following
          }
        })
      })
      .catch((error) =>{
        console.log(error)
      })
    }
  }
  getRepos() {
    console.log("get repos")
  }
  getStarred() {
    console.log("get satarred")
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos = {this.state.repos}
      starred = {this.state.starred}
      handleSearch = {(e) => this.handleSearch(e)}
      getRepos = {() => console.log("get repos")}
      getStarred = {() => console.log("get satarred")}
      />
  }
}
  

export default App;
