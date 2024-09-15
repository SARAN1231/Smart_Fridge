import React from 'react'
import Header from '../header'
import FruitsTable from './FruitTable'
import VegetablesTable from './VegTable'
import Footer from './Footer'

const About = () => {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center justify-center p-14 space-y-6">
        <FruitsTable />
      </div>
      <div className="flex flex-col items-center justify-center pt-14 space-y-6">
        <FruitsTable />
        {/* <VegetablesTable /> */}
      </div>
      <Footer/>
    </>
  )
}

export default About