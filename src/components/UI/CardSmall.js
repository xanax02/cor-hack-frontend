import React from 'react'

const CardSmall = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-[200px] shrink-0 w-[220px] bg-[#171D21] mr-6 mb-6 rounded-lg text-lg font-medium cursor-pointer'>
      <p>{props.create}</p>
      <p>{props.title}</p>
    </div>
  )
}

export default CardSmall