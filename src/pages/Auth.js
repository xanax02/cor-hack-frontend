import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Auth = () => {

  const [searchQuery] = useSearchParams();
  const isLogin = (searchQuery.get('mode') === 'signin' || searchQuery.size === 0);

  const submitHandler = () => {
    
    //api
    const url = ''
  }

  return (
    <div className='w-[100vw] h-[100vh] flex overflow-hidden'>
      <div className='w-[40%] h-[100vh] text-center mt-40'>
        <input 
            className='w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 placeholder:text-white placeholder:tracking-wider placeholder:text-lg focus:outline-none' 
            type='text' 
            placeholder='email'
        />
        <input 
            className='w-[66%] h-14 bg-[#1E272D] rounded-lg px-2 mt-4 placeholder:text-white placeholder:tracking-wider placeholder:text-lg focus:outline-none' 
            type='password' 
            placeholder='password' 
        />
        <button className='w-[66%] h-14 bg-[#0D253F] hover:bg-[#0e2844] rounded-lg px-2 mt-5 tracking-wider duration-200'>Submit</button>
        <Link to={`?mode=${isLogin ? 'signup' : 'signin'}`}>
          <p className=' text-right w-[66%] mx-auto px-2 py-4 cursor-pointer'>{isLogin ? 'signup' : 'signin'}</p>
        </Link>
      </div>
      <div className=''>
        <img className='h-full w-full' src='./assets/app.jpg' alt='img' />
      </div>
    </div>
  )
}

export default Auth
