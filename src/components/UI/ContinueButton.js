import React from 'react'

import { MdOutlineNavigateNext } from 'react-icons/md';

const ContinueButton = (props) => {
    return (
        <div className='bg-[#0D253F] flex px-4 py-2 rounded-md items-center cursor-pointer' onClick={props.onClick}>
            <button className='text-2xl ml-4'>Continue</button>
            <MdOutlineNavigateNext
                className='text-gray-200 text-4xl cursor-pointer hover:bg-white/5 duration-200 rounded-full'
            />
        </div>
    )
}

export default ContinueButton
