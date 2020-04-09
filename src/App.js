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
  
  getGitHubBaseUrl(username, type) {
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }
  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER) {
      target.disabled = true
      axios.get(this.getGitHubBaseUrl(value))
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
          },
          repos: [],
          starred: []
        })
      })
      .catch((error) =>{
        console.log(error)
      })
      .then(() => {
        target.disabled = false
      })
    }
  }
  getRepos(type) {
    return (e) => {
      var username = this.state.userinfo.login
      axios.get(this.getGitHubBaseUrl(username, type))
      .then((response) => {
        console.log(response)
        this.setState({
          [type]: response.data.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      })
      .catch((error) =>{
        console.log(error)
      })
    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos = {this.state.repos}
      starred = {this.state.starred}
      handleSearch = {(e) => this.handleSearch(e)}
      getRepos = {this.getRepos('repos')}
      getStarred = {this.getRepos('starred')}/>
  }
}
  

export default App;
