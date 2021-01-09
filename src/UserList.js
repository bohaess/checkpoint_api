import React,{useEffect,useState} from 'react'
import axios from "axios"



const UserList = () => {
  const [users,setUsers]=useState([]) ;
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then(res=>
        {setUsers(res.data) ;
        console.log(users)}
        )
        .catch(err=>console.log(err)) ;
    },[]) ;
    console.log(users.data)
    return (
       <div>
           <h1>List of Users</h1>
           <div className='items'>
           {users.map(item=>(
               <p>{item.name}</p>
           ))}
        </div>
       </div>

    )
}

export default UserList
