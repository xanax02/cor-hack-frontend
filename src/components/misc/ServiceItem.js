import React, { useState } from 'react'

import { TiTick } from 'react-icons/ti';

const ServiceItem = () => {

    const [selected, isSelected] = useState(false);

  return (
    <div className={ `h-[50px] w-[300px] flex justify-between items-center ${selected ? 'bg-[#1E272D]' : 'bg-[#1E272D]/50'}` }>
      <p className='px-2 text-lg'>service</p>
      {selected && <TiTick className='mr-2' />}
    </div>
  )
}

export default ServiceItem
