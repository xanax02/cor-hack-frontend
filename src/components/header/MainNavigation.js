import React from 'react'
import { Link } from 'react-router-dom'

import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { createOverlayActions } from '../../store/createOverlay-slice'

const MainNavigation = (props) => {

  const dispatch = useDispatch();

  return (
      <div className='h-[70px] bg-[#0D253F] flex pr-20 items-center justify-between'>
        <div className='flex items-center'>
          <div className={`w-[300px] ${props.sidebarFull ? 'bg-[#171D21]' : ''} h-[70px] flex items-center justify-center`}>
            <h1 className='text-4xl tracking-wider font-bold'>Name</h1>
          </div>
          {props.sidebarFull && <div
            className='ml-5 rounded-lg flex items-center justify-center cursor-pointer text-gray-300 hover:text-white duration-100'
            onClick={() => {dispatch(createOverlayActions.setShowOverlay(true))}}
          >
            <p className='text-lg mr-1'>Projects</p>  
            <IoMdArrowDropdown className=' right-8 top-4' />
          </div>}
        </div>
        <div className='flex'>
          <Link className='text-gray-300 hover:text-gray-50' to={'/'}>Profile</Link>
        </div>
      </div>
  )
}

export default MainNavigation;
