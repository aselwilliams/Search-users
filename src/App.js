import axios from 'axios';
import './App.css';
import {Users} from './users';
import {useState,useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <input type='text' placeholder='Search...' className='search'/>
      <ul className='list'>
        <li className='listItem'>John</li>
      </ul>
    
    </div>
  );
}

export default App;
