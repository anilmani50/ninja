import React from 'react';
import Link from 'next/link';
import Router, {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Ninja from './Ninja';

function Index(props) {
  const handleChage=()=>{
    console.log("the page will goes to product page")
    Router.replace('/product')

  }
  return (
    <>
    <Head>
      <title>HELLO ALAPATI</title>
    </Head>
    <div className={styles.nmain}>
      <h1 >blog page</h1>
      <Link href='/blog'>
      <a>blog</a>
      </Link>
      <h1>docs page</h1>
      <Link href='/docs'>
      <a>docs</a>
      </Link>
      <h1>product page</h1>
      <Link href='/product'>
      <a>product</a>
      </Link>
      <button  className={styles.footer} onClick={handleChage}> place order</button>
      
    </div>
    <Ninja/>

    </>
  );
}

export default Index;