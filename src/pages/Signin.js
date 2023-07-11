import React from 'react'

const Signin = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex overflow-hidden'>
      <div className='w-[40%] h-[100vh] text-center mt-40'>
        <input className='w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 placeholder:text-white placeholder:tracking-wider placeholder:text-lg' type='text' placeholder='email' />
        <input className='w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 mt-5 placeholder:text-white placeholder:tracking-wider placeholder:text-lg' type='password' placeholder='password' />
        <button className='w-[66%] h-14 bg-[#0D253F] hover:bg-[#0e2844] rounded-lg px-2 mt-5 tracking-wider duration-200'>Submit</button>
      </div>
      <div className=''>
        <img className='h-full w-full' src='./assets/app.jpg' />
      </div>
    </div>
  )
}

export default Signin
