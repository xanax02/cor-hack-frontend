import React, {forwardRef} from 'react'

const ServiceInput = forwardRef((props, ref) => {
    return (
        <div className='my-4'>
            <h3>{props.title}</h3>
            <div className='flex w-full mt-2'>
                <input 
                    ref={ref} 
                    className='bg-[#242E34] focus:outline-none h-[40px] flex-grow px-4 placeholder:text-gray-600'
                    placeholder={props.title === 'commands' ? 'Your Commands' : `Your ${props.title} path`} 
                />
                <button className='bg-[#171D21] px-8'>Add</button>
            </div>
        </div>
    )
})

export default ServiceInput;


//242E34