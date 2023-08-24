import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full py-15 text-white px-4'>
        <div className='max-w[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Want tips & trics to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to data.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 flex w-full rounded-md text-black ' type="email" placeholder='Enter Email' />
                    <button className='bg-green-500 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Netify Me</button>

                </div>
                <p>We care bout the protection of your data.Read our <span className='text-green-500'>Privacy Policy </span>   </p>
            </div>
        </div>
    </div>
  )
}
