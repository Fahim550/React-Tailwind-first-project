import React from 'react'
import Laptop from '../photo/laptop.jpg'
export default function Analytics() {
  return (
    <div className='bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Laptop} alt="" className='w-[500px] mx-auto my-4 ' />
        <div className='flex flex-col justify-center'> 
          <p className='text-green-500 font-bold' >DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio laborum soluta sit sequi iusto illo ratione officiis laudantium cupiditate vitae! A animi ipsa numquam at placeat sint totam similique quibusdam?</p>
          <button className= 'bg-black text-green-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>

        </div>
      </div>

    </div>
  )
}
