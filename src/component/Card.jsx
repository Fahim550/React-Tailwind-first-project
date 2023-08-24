import React from 'react'
import singel from '../photo/single.png'
import doubel from '../photo/double.png'
import triple from '../photo/triple.png'

export default function Card() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/* card 1*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={singel} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Singel User</h2>
                <p className='text-center  text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                    <button className='bg-green-500 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Start  Trail</button>
                </div>
                
            </div>
            {/* card 2 */}
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img  className='w-20 mx-auto bg-transparent mt-[-3rem] bg-white' src={doubel} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center  text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>1 Tb Storage</p>
                    <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
                    <button className='bg-green-500 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Start  Trail</button>
                </div>
                
            </div>
            {/* card 3 */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center  text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>5 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8 '>Send up to 20 GB</p>
                    <button className='bg-green-500 w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 text-black'>Start  Trail</button>
                </div>
                
            </div>

        </div>

    </div>
  )
}
