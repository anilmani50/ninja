import React from 'react';
import Image from 'next/image'


export const getStaticPaths=async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    console.log(data);

    const paths=data.map((user)=>{
        return{
            params:{id:user.id.toString()}
        }

    })
    return{
        paths,
        fallback:false
    }
    
}

export const getStaticProps=async (context)=>{
    const id=context.params.id
    const response=await fetch('https://jsonplaceholder.typicode.com/users/' +id);
    const data= await response.json();
    console.log(data);
    return{
        props:{
            user:data
        }
    }

}

function Ninja({user}) {
    console.log("props are:",user)
    return (
        <div>
            
           <h1>{user.id}</h1> 
           <h1>{user.name}</h1> 
           <h1>{user.username}</h1> 
           <h1>{user.email}</h1>
           <h1>Comapany Name:{user.company.name}</h1>  
           <h1>{user.id}</h1> 
           <h1>{user.name}</h1> 
           <h1>{user.username}</h1> 
           <h1>{user.email}</h1>
           <h1>Comapany Name:{user.company.name}</h1>  
           <Image src="/28su9mp.jpg" height={500} width={1250}/>
           <Image src="/28su9mp.jpg" height={500} width={1250}/>


            
        </div>
    );
}

export default Ninja;