import React from 'react'
import { Link } from 'react-router-dom'

import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { createOverlayActions } from '../../store/createOverlay-slice'

const MainNavigation = () => {

  const dispatch = useDispatch();

  return (
      <div className='h-[70px] bg-[#0D253F] flex px-16 items-center justify-between'>
        <div className='flex'>
          <h1 className='text-4xl tracking-wider font-bold '>Name</h1>
          <div
            className='ml-8 w-[172px] h-[48px] bg-[#171D21] rounded-lg flex items-center justify-center cursor-pointer'
            onClick={() => {dispatch(createOverlayActions.setShowOverlay(true))}}
          >
            <p className='text-lg'>Projects</p>  
            <IoMdArrowDropdown className=' right-8 top-4' />
          </div>
        </div>
        <div className='flex'>
          <Link className='text-gray-300 hover:text-gray-50' to={'/'}>Profile</Link>
        </div>
      </div>
  )
}

export default MainNavigation;
