import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
export default function Navbar() {
  const [nav,setNav]=useState(false)

  const handleNav=()=>{
   setNav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 mx-auto max-w-screen-xl px-4  text-white'>
        <h1 className='font-bold text-green-500 text-3xl'>REACT</h1>
        <ul className='text-white hidden md:flex'>
            <li className='p-4'>Company</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav?<AiOutlineMenu size={20} />:<AiOutlineClose size={20}/>}
            
            
        </div>
        <div className={!nav?'fixed left-[-100%]':'fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-black ease-in-out duration-500 lg:hidden'}>
        <h1 className='font-bold text-green-500 text-3xl m-4'>REACT</h1>
            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
