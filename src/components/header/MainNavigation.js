import React from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'

const MainNavigation = () => {
  return (
    <div className='h-[70px] bg-[#0D253F] flex px-16 items-center justify-between'>
        <div className='flex'>
            <h1 className='text-4xl tracking-wider font-bold w-[200px]'>Name</h1>
            <button className='ml-0 xl:ml-[84px] w-[172px] h-[48px] bg-[#171D21] rounded-lg text-[18px] relative'>Projects <IoMdArrowDropdown className='absolute right-8 top-4' /></button>
        </div>
        <div className='flex'>
          <button className='w-[88px] h-[20px] bg-[#D9D9D9] text-gray-800 rounded-sm'>Profile</button>
        </div>
    </div>
  )
}

export default MainNavigation
