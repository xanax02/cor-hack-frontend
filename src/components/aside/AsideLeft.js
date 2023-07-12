import React from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'

const AsideLeft = () => {
  return (
    <div className='flex-shrink-0 w-[244px] xl:w-[348px] min-h-[calc(100vh-70px)] bg-[#171D21]'>
      <div className='w-full h-16 flex items-center justify-center text-lg bg-[#101518] cursor-pointer'>
        <p className='mr-2'>Apps</p>
        <IoMdArrowDropdown className='mt-1 text-xl' />
      </div>
      <div className='h-[88px] flex items-center justify-center hover:bg-[#242E34] duration-200'>
        <p>Dashboard</p>
      </div>
      <div className='h-[88px] flex items-center justify-center hover:bg-[#242E34] duration-200'>
        <p>Bundles</p>
      </div>
      <div className='h-[88px] flex items-center justify-center hover:bg-[#242E34] duration-200'>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default AsideLeft
