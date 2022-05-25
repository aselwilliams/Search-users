import axios from 'axios';
import './App.css';
import {Users} from './users';
import {useState,useEffect} from 'react';
import Table from './Table'
import TableCoin from './TableCoin';

function App() {
  const [query,setQuery] =useState('');
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchUsers=async()=>{
      const res= await axios.get('https://api.coinlore.com/api/tickers/')
      setData(res.data.data)
      console.log(res.data.data)
    }
    if(query.length===0 || query.length>2) fetchUsers()
  },[query])

  const keys=['name','symbol']

  const search=(data)=>{
    return data.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
  }
 
  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
      {/* <Table data={search(Users)} /> */}
      <TableCoin data={search(data).splice(0,10)} />
    
    </div>
  );
}

export default App;

{/* <ul className='list'>
        {filterByName().map((user)=>(
          <li className='listItem' key={user.id}>{user.first_name}</li>
        ))}
  </ul> */}

  // const search=()=>{
  //   return Users.filter((user)=>user.first_name.toLowerCase().includes(query) ||
  //   user.last_name.toLowerCase().includes(query) ||
  //   user.email.toLowerCase().includes(query))
  //  }

  // function App() {
  //   const [query,setQuery] =useState('');
  
  //   const keys=['first_name','last_name', 'email']
  
  //   const search=(data)=>{
  //     return data.filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
  //   }
   
  //   return (
  //     <div className="app">
  //       <input type='text' placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
  //       <Table data={search(Users)} />
      
  //     </div>
  //   );
  // }
  
  // export default App;