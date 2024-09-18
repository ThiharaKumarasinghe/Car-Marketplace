import React from 'react'

const ImageGalary = ({carDetails}) => {
    // console.log(carDetails?.images[0].imageUrl)
  return (
    <div>
      {carDetails?.images[0]?.imageUrl?
        <div>
        <img src={carDetails?.images[0]?.imageUrl} alt={carDetails?.listingTitle} 
        className=' w-full object-cover h-[500px] rounded-xl'/>
    </div>:
    <div className=" w-full rounded-xl h-[500px] bg-slate-200 animate-pulse my-5"></div>
      }
    </div>
    
  )
}

export default ImageGalary