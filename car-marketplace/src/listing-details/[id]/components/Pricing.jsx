import { Button } from '@/components/ui/button'
import React from 'react'
import { MdLocalOffer } from "react-icons/md";


const Pricing = ({carDetails}) => {
  return (
    <div>
        {carDetails?.sellingPrice?
            <div className=' p-10 rounded-xl bg-white shadow-md border'>
            <h2 className='font-medium text-xl'>Our Price</h2>
            <p className=' my-2 font-bold text-4xl'>Rs. {carDetails.sellingPrice}</p>

            <Button className=" w-full mt-7 flex gap-2" size="lg"><MdLocalOffer className=' text-lg'/>Make an Offer Price</Button>
    
        </div>:
        <div className=" w-full rounded-xl h-[150px] bg-slate-200 animate-pulse"></div>
        }
    </div>
  )
}

export default Pricing