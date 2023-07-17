import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonNavCol from '../components/UI/ButtonNavCol';

const CreateApp = () => {

  const navigate = useNavigate();
  const appName = useRef();
  const appDesc = useRef();

  const submitHandler = () => {
    //fetchapi
    console.log(appName.current.value)
    console.log(appDesc.current.value);
    navigate('/', {replace: true})
  }

  return (
    <div className='relative flex h-[100vh] w-[100vw]'>
        <div className='absolute left-[5%] top-[20%]'>
          <h2 className='text-6xl text-gray-200 font-medium'>Create a new App</h2>
          <input
            type='text'
            className='bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8'
            placeholder='your app name'
            ref={appName}
          />

          <label className="block mb-2 text-lg font-medium mt-8 ">Description</label>
          <textarea
            className="resize-none block p-2.5 w-full h-[150px] text-lg rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none"
            placeholder="Write something about your app..."
            ref={appDesc}
          />
          <div className='flex mt-4 items-center justify-end'>
            <ButtonNavCol title='Continue' onClick={submitHandler} />
          </div>
        </div>
    </div>
  )
}

export default CreateApp;
