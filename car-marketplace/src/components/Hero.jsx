import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <div>
        <div className=' flex flex-col items-center p-10 py-20 gap-6 h-[700px] w-full bg-[#eef0fc]'>
            <h1 className=' text-lg '>Find cars for sale and rent near to you</h1>
            <h2 className=' text-[60px] font-bold'>Find Your Dream Car</h2>

            <Search/>

            <img src="carHero.png" className=' mt-9 w-[70%]'/>
        </div>
    </div>
  )
}

export default Hero