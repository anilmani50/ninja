import Link from "next/link"
import { useEffect } from "react"
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";

const PageNotFound=()=>{
    const router=useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
            

        },10000)
    },[])
    return(
        <div className="notFound">
            <h1>OOPS-----</h1>
            <h2>THE PAGE NOT FOUND</h2>
            
        </div>
    )
}
 
export default PageNotFound