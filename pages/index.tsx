import Banner from '@/components/Banner';
import Header from '@/components/Header';
import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 
    to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      
      <Header />

      <main>
        {/* Banner */}
        <Banner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home
