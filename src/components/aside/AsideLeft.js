import React from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'
import SidebarDropdown from './SidebarDropdown'

const DUMMY_DATA = [
    {title: 'app1'},
    {title: 'app2'},
    {title: 'app3'},
    {title: 'app4'},
    {title: 'app5'},
    {title: 'app6'},
]

const AsideLeft = () => {
  return (
    <div className='flex-shrink-0 w-[300px] min-h-[calc(100vh-70px)] bg-[#171D21]'>
      {/* <div className='w-full h-16 flex items-center justify-center text-lg border-y-2 border-gray-500 cursor-pointer'>
        <p className='mr-2'>Apps</p>
        <IoMdArrowDropdown className='mt-1 text-xl' />
      </div> */}
      <SidebarDropdown title={'Apps'} />
      <div className='h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200'>
        <p>Dashboard</p>
      </div>
      <div className='h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200'>
        <p>Bundles</p>
      </div>
      <div className='h-[88px] flex items-center justify-center hover:bg-[#1E272D] duration-200'>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default AsideLeft
