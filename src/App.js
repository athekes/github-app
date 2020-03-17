import React from 'react';
import './App.css';

const App = () => (
  <div className='app'> 
    <div className='search'>
      <input 
        type='search' 
        placeholder='Digite o nome do usuário no GitHub'/>
    </div>

    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/37967122?v=4'/>
      <h1>
        <a href='https://github.com/athekes'>Gustavo Castro</a>
      </h1>
      
      <ul className='repos-info'>
        <li> Repositórios: </li>
        <li> Seguidores: </li>
        <li> Seguindo: </li>
      </ul>

      <div className='actions'>
        <button>Ver Repositórios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className="repos">
        <h2>Repositórios</h2>
        <ul>
          <li><a href='#'>Nome do Repositório</a></li>
        </ul>
      </div>


      <div className="starred">
        <h2>Favoridos</h2>
        <ul>
          <li><a href='#'>Nome do Repositório</a></li>
        </ul>
      </div>

     </div>
  </div>
)

export default App;
