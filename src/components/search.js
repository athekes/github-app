import React from 'react'

const axios = require('axios');

const Search = () => (

  <div className='search'>
    <input 
      type='search' 
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={(e) => {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        
        if (keyCode == ENTER) {
          axios.get(`https://api.github.com/users/${value}`)
          .then((response) => {
            console.log(response)
          })
          .catch((error) =>{
            console.log(error)
          })
        }
      }}
    />
  </div>
)

export default Search