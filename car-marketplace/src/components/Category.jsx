import Data from '@/Shared/Data'
import React from 'react'

const Category = () => {
  return (
    <div className=' mt-40'>
        <h1 className=' font-bold text-3xl text-center mb-6 pt-24'>Browse by Type</h1>

        <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20' >
            {
                Data.carTypes.map((type, index )=>(
                    <div className=' border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'> 
                        <img src={type.image} alt="type image" />
                        <h2>{type.type}</h2>
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Category