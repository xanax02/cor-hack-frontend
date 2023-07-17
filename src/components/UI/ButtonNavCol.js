import React from 'react'

import { MdOutlineNavigateNext } from 'react-icons/md';

const ButtonNavCol = (props) => {
    return (
        <div className='bg-[#0D253F] flex px-8 py-2 rounded-md items-center cursor-pointer' onClick={props.onClick}>
            <button className='text-2xl'>{props.title}</button>
            {/* <MdOutlineNavigateNext
                className='text-gray-200 text-4xl cursor-pointer hover:bg-white/5 duration-200 rounded-full'
            /> */}
        </div>
    )
}

export default ButtonNavCol
