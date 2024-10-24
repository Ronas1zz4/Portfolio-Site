import React from 'react'
import { GoArrowUp } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='absolute w-full bottom-0'>
        <div className='bg-black w-full p-4 py-6 flex items-center justify-around'>
            <h4 className='text-white'>Sujan Dhakal 2024 All Rights Reserved</h4>
            <button className='text-white text-2xl'>
                <GoArrowUp/>
            </button>
        </div>
    </footer>
  )
}

export default Footer