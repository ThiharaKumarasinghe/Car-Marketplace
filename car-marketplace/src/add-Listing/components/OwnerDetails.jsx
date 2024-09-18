import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const OwnerDetails = ({carDetails}) => {
  return (
    <div>
        {carDetails ? (
        <div className=" p-5 rounded-xl bg-white shadow-md mt-6 border">
          <h2 className=" my-2 font-medium text-2xl">Owner Details</h2>
          <Separator className="mb-4"/>

          <img src={carDetails?.userImageUrl} alt="user image" className=' h-[70px] w-[70px] rounded-full '/>
          <h2 className=' mt-2 font-bold text-xl'>{carDetails?.userName}</h2>
          <h2 className=' mt-1 text-md text-gray-500 '>{carDetails?.createdBy}</h2>

          <Button className='w-full mt-6'>Message Owner</Button>


            

        </div>
      ) : (
        <div className=" w-full rounded-xl h-[200px] bg-slate-200 animate-pulse mt-1"></div>
      )}
    </div>
  )
}

export default OwnerDetails