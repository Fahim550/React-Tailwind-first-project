import React from 'react'
import Typed from 'react-typed';
export default function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
                <p className='text-green-500 font-bold p-2'>GROWING WITH DATA ANALYICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-6'>Grow With Data.</h1>
                <div className='flex justify-center py-4'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast,flexible financing for </p>
                    <Typed className='pl-2  md:text-5xl sm:text-4xl text-xl font-bold'
                    strings={[' BTB','BTC','SASS']}
                    typeSpeed={120}
                    backSpeed={140} loop></Typed>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analycics to increase for BTB,BTC,& SASS platfroms</p>
                <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}
