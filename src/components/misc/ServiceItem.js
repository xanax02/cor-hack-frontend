import React, { useState } from 'react'

import { TiTick } from 'react-icons/ti';

const ServiceItem = () => {

    const [selected, isSelected] = useState(false);

  return (
    <div className={ `h-[50px] w-[200px] bg-[#1E272D]` }>
      <h1>service</h1>
    </div>
  )
}

export default ServiceItem
