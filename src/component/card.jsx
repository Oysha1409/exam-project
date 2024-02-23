import { Button, Rating } from '@material-tailwind/react';
import React from 'react'

const Card = ({ title, image, category, price, description }) => {
  return (
    <div className="rounded-xl border-[1px] border-gray p-5 flex  flex-col justify-between items-center">
      <img
        src={image}
        alt={title}
        className="w-[360px] h-[400px] object-contain"
      />
      <div className='flex justify-center gap-5'>
        <h2 className="text-dark text-2xl font-bold">{title}</h2>
        <div className='text-dark font-bold'>{price}$</div>
      </div>

<p className='text-base'>{description}</p>
<span className='text-base font-semibold mt-2'>{category}</span>
<div className='flex justify-between gap-11 mt-5'>
  <Button className='bg-orange p-1 rounded-sm text-sm text-dark'>+</Button>
  <Rating value={4} />
</div>
    </div>
  )
}

export default Card;