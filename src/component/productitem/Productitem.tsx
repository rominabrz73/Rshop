import React from 'react'
import { Iproduct } from '../../types/server'

function Productitem(  {image,title,price}:Iproduct) {
  return (
    <div className="shadow border h-45">
        <img className="w-full" src={image} />
        <div className='flex justify-between p-2'>
            <p className='font-bold line-clamp-1'>{title}</p>
            <p className='font-bold'>{price}</p>
        </div>
    </div>

  )
}

export default Productitem