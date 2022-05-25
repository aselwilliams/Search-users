import axios from 'axios';
import './App.css';
import {Users} from './users';
import {useState,useEffect} from 'react';
import Table from './Table'
import TableCoin from './TableCoin';
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa'

function App() {
  const [query,setQuery] =useState('');
  const [data,setData] = useState([]);
  const [sortByRank, setSortByRank]= useState('desc')
  const [sortByPrice, setSortByPrice]= useState('desc')

  useEffect(()=>{
    const fetchUsers=async()=>{
      const res= await axios.get('https://api.coinlore.com/api/tickers/')
      setData(res.data.data)
      console.log(res.data.data)
    }
    if(query.length===0 || query.length>2) fetchUsers()
  },[query])

const sortData=(data)=>{
  const sorted=data.sort((a,b)=>sortByRank==='desc' ? b.rank-a.rank : a.rank-b.rank)
  return sorted;
}

  const keys=['name','symbol']

  const search=(data)=>{
    return sortData(data).filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
  }
 
const handleSortByRank=()=>{
if(sortByRank==='desc'){
  setSortByRank('asc')
} else {
  setSortByRank('desc')
}
}

const handleSortByPrice=()=>{
  if(sortByPrice==='desc'){
    setSortByPrice('asc')
  } else {
    setSortByPrice('desc')
  }
}

  return (
    <div className="app">
      <input type='text' placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
      {/* <Table data={search(Users)} /> */}
      <div className='sort-container'>
      <div onClick={handleSortByRank} className="rank-btns" >
        <span className='rank'>Sort By Rank</span>
        {sortByRank==='desc' ? <FaArrowAltCircleDown size='28px' /> :
                                <FaArrowAltCircleUp size='28px' />}
      </div>
      <div onClick={handleSortByPrice} className='rank-btns'>
      <span className='rank'>Sort By Price</span>
        {sortByPrice==='desc' ? <FaArrowAltCircleDown size='28px' /> :
                                <FaArrowAltCircleUp size='28px' />}
      </div>
      </div>
      <TableCoin data={search(data)} />
    
    </div>
  );
}

export default App;

{/* <TableCoin data={search(data).splice(0,10)} /> */}
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