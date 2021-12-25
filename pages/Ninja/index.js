import React from 'react';
import Link from 'next/link';
import Ninja from './[id]';

export const getStaticProps=async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json()
    console.log(data)

    return{
        props:{
            usersData:data
        }
    }

}

function UsersData({usersData}) {
    return (
        <div>
            <h1>ALL NINJAS</h1>
            {usersData.map((user)=>(
                <Link  href={'/Ninja/'+user.id}key={user.id}>
                <a><h1>{user.name}</h1></a>
                </Link>

            ))}
            
        </div>
        
        
    );
}

export default UsersData;