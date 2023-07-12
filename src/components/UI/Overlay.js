import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { createOverlayActions } from '../../store/createOverlay-slice'

const Overlay = () => {

   const dispatch =  useDispatch();

  return (
    <>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-white opacity-20' onClick={() => {dispatch(createOverlayActions.setShowOverlay(false))}} />
        <div className='absolute min-h-[144px] w-[50%] bg-[#242E34] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md p-2 flex'>
            <fieldset className='border-[5px] rounded-md border-gray-500 p-2 w-full relative'>
                <legend className='text-2xl font-semibold'>Your Projects</legend>
                <Link className='absolute right-2 bottom-2' to={'/'}><p className='text-lg font-semibold bg-[#171D21] px-4 py-2 rounded-lg'>Create new project</p></Link>    
            </fieldset>  
        </div>
    </>
  )
}

export default Overlay
