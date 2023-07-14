import React, { useState } from 'react'

const CreateApp = () => {

  const [step, setStep] = useState();
  const [appName, setAppName] = useState();
  const [services, setServices] = useState();
  const [appDesc, setAppDesc] = useState();
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [commands, setCommands] = useState([]);

  return (
    <div className='relative flex h-[100vh] w-[100vw]'>
      <div className='absolute left-[5%] top-[20%]'>
        <h2 className='text-6xl text-gray-200 font-medium'>Create a new App</h2>
        <input
          type='text'
          className='bg-transparent focus:outline-none border-b-4 border-b-gray-200 text-4xl mt-8'
          value={appName}
          placeholder='your app name'
          onChange={(event) => { setAppName(event.target.value) }}
        />

        <label for="message" className="block mb-2 text-lg font-medium mt-8 ">Description</label>
        <textarea 
          className="resize-none block p-2.5 w-full h-[150px] text-lg rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none" 
          placeholder="Write something about your app..."
        />

      </div>
    </div>
  )
}

export default CreateApp;
