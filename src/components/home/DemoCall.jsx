import React from 'react'
import Header from '../header'
import Footer from './Footer'
import RequestDemo from './RequestDemo'

const DemoCall = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center pt-14 space-y-6 mb-10">
        <RequestDemo />
      </div>
    <div className='mt-20'>
    <Footer/>
    </div>
    
    </>
  )
}

export default DemoCall