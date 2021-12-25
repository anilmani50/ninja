import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Poduct.module.css'



export const getStaticProps= async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    console.log(data)

    return{
        props:{
            usersData:data
        }
    }

}


function ProductList({usersData}) {
    console.log(usersData)
    return (
        <div >
            {
              usersData.map((user)=>(
                  <Link href={'/Ninja/'+user.id} key={user.id}>
                      <a><h1>{user.title}</h1></a>
                  </Link>
                  
              ))
            }
           
        </div>
    );
}

export default ProductList;