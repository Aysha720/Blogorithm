import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44'/>
                <p className='max-w-[410px] mt-6 text-justify'>This platform is a space for sharing insights, ideas, and stories across technology, innovation, and everyday experiences. We aim to create a meaningful and respectful community where voices are heard, thoughts are exchanged, and curiosity thrives. Whether you're here to read, learn, or contribute, we're glad to have you on this journey. Built with love using the MERN stack — because good code fuels great content.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index) =>(
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a href='#' className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
        </div>
        <p className="py-4 text-center text-sm md:text-base text-gray-500/80 "> © {new Date().getFullYear()} Blogorithm - All Rights Reserved.</p>
    </div>
  )
}

export default Footer