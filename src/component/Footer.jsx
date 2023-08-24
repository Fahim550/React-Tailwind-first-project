import React from 'react'
import { FaDribbble, FaFacebook, FaGitSquare, FaInstagram, FaTwitter }from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='max-w-[1240px] bg-black mx-auto py-16  px-4  grid lg:grid-cols-3  gap-8 text-gray-300'>
        <div>
            <h1 className='font-bold text-green-500 text-3xl'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci, ipsum itaque molestias tenetur laboriosam provident a? Tempore, facere corporis.</p>
            <div className='flex md:w-[75%] justify-between my-6'>
                <FaFacebook size={30}/>
                <FaInstagram size={30}/>
                <FaTwitter size={30}/>
                <FaGitSquare size={30}/>
                <FaDribbble size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6 '>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentaion</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>

        </div>
    </div>
  )
}
