import Head from 'next/head';
import Background from '../components/frontendComponents/Background';
import User from '../components/frontendComponents/User';
import Products from '../components/frontendComponents/Products';
export default function Home() {
  
  return (
<div>
      <Head>
        <title>Redeem your Points!</title>
      </Head>
    <Background/>
    <User/>
    <Products/>
    </div>
  )
}


  