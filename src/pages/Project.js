import React, { useRef, useState } from 'react'

import { MdOutlineNavigateNext } from 'react-icons/md';

const Project = () => {

    const [step, setStep] = useState(1);
    const [projectName, setProjectName] = useState();


    const nextHandler = () => {
        setStep(2);
    }

    return (
        <div className='relative h-[100vh] w-[100vw]'>
            <div className='absolute top-[20%] left-[5%]'>
                <p className='text-gray-400 text-lg'>0{step}/02</p>
            </div>
            {
                step === 1
                &&
                <div className='absolute top-[25%] left-[5%]'>
                    <h2 className='text-6xl text-gray-200 font-medium'>Create a new Project</h2>
                    <input
                        type='text'
                        className='bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8'
                        value={projectName ? projectName : ''}
                        placeholder='your project name'
                        onChange={(event) => { setProjectName(event.target.value) }}
                    />
                    <div className='flex mt-8 justify-end'>
                        <div className='bg-[#0D253F] flex px-4 py-2 rounded-md items-center cursor-pointer' onClick={nextHandler}>
                            <button className='text-2xl ml-4'>Continue</button>
                            <MdOutlineNavigateNext
                                className='text-gray-200 text-4xl cursor-pointer hover:bg-white/5 duration-200 rounded-full'
                            />
                        </div>
                    </div>
                </div>
            }
            {
                step === 2
                &&
                <div className='absolute'>
                    This is step 2.
                    <button onClick={() => { setStep(1) }}>Previous</button>
                </div>
            }
        </div>
    )
}

export default Project
