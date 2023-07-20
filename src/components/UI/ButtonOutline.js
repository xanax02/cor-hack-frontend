import React from 'react'

const ButtonOutline = (props) => {
    return (
        <button
            className='text-2xl px-8 py-1 rounded-md outline outline-[#24c58f] text-[#24c58f]'
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default ButtonOutline
