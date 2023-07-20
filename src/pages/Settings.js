import React, { useRef } from 'react'
import ServiceInput from '../components/UI/ServiceInput'
import ButtonOutline from '../components/UI/ButtonOutline';

const Settings = () => {

    const folderRef = useRef();

    return (
        <div className='flex m-8'>
            <div className='w-[60%] border-2 border-white rounded-lg p-4'>
                <p className='mb-2'>Configure App</p>
                <ServiceInput title='folder' ref={folderRef} />
                <ServiceInput title='files' ref={folderRef} />
                <ServiceInput title='commands' ref={folderRef} />
                <div className='text-right mt-6'>
                    <ButtonOutline title='Save' />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Settings
