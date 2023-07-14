import React, { useState } from 'react'

import { IoMdArrowDropdown } from 'react-icons/io'



const SidebarDropdown = (props) => {

    const [drop, setDrop] = useState(true);

    return (
        <div className='w-full flex flex-col items-center text-lg border-y-2 border-gray-500 cursor-pointer'>
            <div 
                className='flex shrink-0 h-16 items-center cursor-pointer'
                onClick={() => {setDrop(drop => drop = !drop);}}
            >
                <p className='mr-2'>{props.title}</p>
                <IoMdArrowDropdown className='mt-1 text-xl' />
            </div>
            <div className={`${drop ? 'flex flex-col' : 'hidden'} duration-200`}>
                <DropDownItem />
                <button className=''>Add app</button>
            </div>
        </div>
    )
}

const DropDownItem = (props) => {
    return (
        <div className='h-16'>
            <p>{props.title}</p>
        </div>
    )
}

export default SidebarDropdown;
