import React from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <div className='h-[70px] bg-[#0D253F] flex px-16 items-center justify-between'>
        <div className='flex'>
            <h1 className='text-4xl tracking-wider font-bold '>Name</h1>
            <button className='ml-2 w-[172px] h-[48px] bg-[#171D21] rounded-lg text-[18px] relative'>Projects <IoMdArrowDropdown className='absolute right-8 top-4' /></button>
        </div>
        <div className='flex'>
          <Link className='text-gray-300 hover:text-gray-50' to={'/'}>Profile</Link>
        </div>
    </div>
  )
}

export default MainNavigation
