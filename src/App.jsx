import React, { useEffect, useState } from 'react'
import Card from './components/card/Card'
import './App.css'
function App() {

  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    async function fetchUser(){
      try{
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();

        setUsers(users);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchUser();
  },[])

if(isLoading) return <p>Loading...</p>
  return (
    <>
      <h1>User List</h1>
      <div className='container' id='userContainer'>
      {
        users.map((user) => (<Card key={user.id} user={user}/>))
      }
      </div>
    </>
  )
}

export default App
