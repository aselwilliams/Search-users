import axios from 'axios';
import './App.css';
import {Users} from './users';
import {useState,useEffect} from 'react';
import Table from './Table'

function App() {
  const [query,setQuery] =useState('');

  const search=()=>{
   return Users.filter((user)=>user.first_name.toLowerCase().includes(query))
  }
 
  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
      <Table data={search(Users)} />
    
    </div>
  );
}

export default App;

{/* <ul className='list'>
        {filterByName().map((user)=>(
          <li className='listItem' key={user.id}>{user.first_name}</li>
        ))}
  </ul> */}