import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import ButtonNavCol from '../components/UI/ButtonNavCol';

const Project = () => {
    const projectName = useRef();
    const navigate = useNavigate();

    const nextHandler = () => {
        //fetch api for new project
        console.log(projectName.current.value);
        navigate('/', {replace: true})
    }

    return (
        <div className='relative h-[100vh] w-[100vw]'>
            <div className='absolute top-[20%] left-[5%]'>
                <p className='text-gray-400 text-lg'>01/01</p>
            </div>
                <div className='absolute top-[25%] left-[5%]'>
                    <h2 className='text-6xl text-gray-200 font-medium'>Create a new Project</h2>
                    <input
                        type='text'
                        className='bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8'
                        placeholder='your project name'
                        ref={projectName}
                    />
                    <div className='flex mt-8 justify-end'>
                        <ButtonNavCol title={'Continue'} onClick={nextHandler} />
                    </div>
                </div>
        </div>
    )
}

export default Project
