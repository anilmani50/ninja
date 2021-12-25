import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

function Index(props) {
  return (
    <div>
      <Image src="/28su9mp.jpg" height={500} width={1250}/>
      <h1>blog page</h1>
   
   <Link href='/'>
   <a>click here go to home page</a>
   </Link>
    </div>
  );
}

export default Index;