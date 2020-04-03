import PropTypes from 'prop-types';
import React from 'react';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
  <div className='app'> 

    <Search handleSearch={handleSearch}/>

    {!!userinfo && <UserInfo userinfo={userinfo}/> }

    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred}/> }

    {!!repos.lenght &&   
      <Repos 
        className='repos' 
        title='Repositórios'
        repos={ repos }
      />
    }
    {!!starred.lenght &&
      <Repos 
        className='starred' 
        title='Favoritos'
        repos={ starred }
      />
    }
  </div>
)

AppContent.protoTypes = {
  userinfo: PropTypes.object.isRequired, 
  repos: PropTypes.array.isRequired, 
  starred: PropTypes.array.isRequired
}

export default AppContent
