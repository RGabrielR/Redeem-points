import Head from 'next/head'
import Background from '../components/frontendComponents/Background';
import User from '../components/frontendComponents/User';
import Products from '../components/frontendComponents/Products';
export default function Home() {
  
  return (
<div>
      <Head>
        <title>AeroContest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Background/>
    <User/>
    <Products/>
    </div>
  )
}


  